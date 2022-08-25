import { useContext, useEffect, useState } from "react";
import { AspectRatio, Box, Flex, Image, useToast, ScaleFade } from "@chakra-ui/react";
import styled from "@emotion/styled";
import StarsRating from "react-star-rate";
import { isMobile } from 'react-device-detect';
import { motion, AnimatePresence } from "framer-motion"
import { MattressContext } from "../../context/mattressContext";
import { Mattress } from "../../types";

interface Props {
  selected: string,
  currentName: string
}

const transition = 'all 250ms cubic-bezier(.17,.67,.83,.67)';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

const Button = styled.button<Props>`
  flex-grow: 1; 
  width: 100%;
  color: ${p => (p.selected === p.currentName ? '#fff' : '#A6A19A')};
  background: ${p => (p.selected === p.currentName ? '#A6A19A' : '#fff')};
  border: 1px solid #A6A19A;
  padding: .4em .8em;
  margin-top: 1em;
  transition: ${transition};
  font-size: .9em;
`;

const DetailsWarapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
`;

const AddToCart = styled.button`
  margin-top: 3em;
  background-color: #D9A76A;
  width: 100%;
  padding: .5em 1em;
  color: #fff;
  border: 1px solid #D9A76A;
  transition: ${transition};
  &:hover{
    background-color: #fff;
    color: #D9A76A;
  }
`;

const MattressSelector = () => {
  const mattressContext = useContext(MattressContext);

  const [data, setData] = useState<object>([]);
  const [activeTab, setActiveTab] = useState<string>("Saatva Classic");
  const [selectedMattress, setSelectedMattress] = useState<Mattress>();
  const updateData = (fetchedData: any) => {mattressContext?.setMattresses(fetchedData)}

  const toast = useToast();

  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
    setSelectedMattress(Object.values(data)[0])
  },[data])

  const submitMattress = ()=>{
    const newMattresses = [...mattressContext?.mattresses, selectedMattress];
    updateData(newMattresses);
    toast({
          title: 'Mattress added',
          description: selectedMattress?.name,
          status: 'success',
          duration: 1500,
          isClosable: true,
          position: 'top-left'
    })
  }

  const getData=()=>{
    fetch('../../../assets/data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    .then((res) =>
      res.json())

    .then((response) => {
      setData(response?.mattresses);
    })
  }

  const switchTab = (tabSelected: string) => {

    Object.values(data).map((matt: Mattress) => {
      if(matt.name === tabSelected){setSelectedMattress(matt)}
    })
    setActiveTab(tabSelected);
  } 

  return (
    <Flex flexDir={isMobile ? "column" : "row"} justifyContent={"space-evenly"} className="MattressSelector" pt="3vh">
      <Box p={ isMobile ? '5vw' : '2vh 0' } width={ isMobile ? '100%' : '65vw'}>
        <AspectRatio maxW={isMobile ? '400px' : '50vw'} ratio={16 / 9}>
          <motion.div
            key={selectedMattress?.imageFileName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: "linear" }
            }}
            >
          <Image  src={`${window.location}assets/images/${selectedMattress?.imageFileName}`} objectFit='cover' alt={selectedMattress?.name} />
          </motion.div>
        </AspectRatio>
        
        <Flex flexDir={'row'} mt={'3vh'} justifyContent={'flex-start'} gap={'1vw'}>
          <p>General Review:</p>
          <StarsRating value={selectedMattress?.reviewRating} style={{
            style: {fontSize: '.9em'},
            full: {star: {fontSize: '1em'}},
            half: {star: {fontSize: '1em'}},
            zero: {star: {fontSize: '1em'}}
            }}/>
        </Flex>
      </Box>
      <Box p={ isMobile ? '5vw' : '2vh 0' } >
        <Flex flexDir={"column"}>
          <Box>
            <h1>Choose Your Mattress</h1>
          </Box>

          <Box>
            {/* Start of styled components */}
            <h2>Select Mattress Type</h2>
            <ButtonWrapper>
              {
                Object.values(data).map((mattress: Mattress) => {
                  const name = mattress?.name;
                  return (
                    <div>
                      <Button
                        key={name}
                        onClick={()=>switchTab(name)}
                        selected={activeTab} currentName={name}
                        >{name}</Button>
                    </div>
                  );
              })
              }
            </ButtonWrapper>
            
            <motion.div
              key={selectedMattress?.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: "linear" }
              }}
              >{/* Just for animation */}
              <DetailsWarapper>
                <p><b>{selectedMattress?.name}</b></p>
                <p>{`$${selectedMattress?.price}`}</p>
              </DetailsWarapper>
            </motion.div>{/* Just for animation */}
            <AddToCart
              role={'add-to-cart'}
              onClick={submitMattress}
              >Add to Cart</AddToCart>
          {/* End of styled components */}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default MattressSelector;