import { 
  Box, 
  Flex, 
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Heading,
  Stack,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { MattressContext } from '../../context/mattressContext'; 
import { LogoIcon, CartIcon } from '../Icons';
import styled from '@emotion/styled';

const CustomBadge = styled.div`
  background-color: #c19678;
  color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  font-size: 10px;
  right: -10px;
`;

const Navbar = () => {
    const mattressContext = useContext(MattressContext);
    const updateData = (fetchedData: any) => {mattressContext?.setMattresses(fetchedData)}

    const [data, setData] = useState<object[]>([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(()=>{
      if(mattressContext?.mattresses !== undefined) createList(mattressContext?.mattresses)
    },[mattressContext])

    const checkOccurrence = (arr: any, keyword: string) =>{
      let counter = 0;
      for (const item of arr.flat()){
        if( item.name === keyword) counter++;
      }
      return counter;
    }

    const createList = (mattresses: object)=>{
      const matts: { name: string, count: number }[] = [];
      Object.values(mattresses).map((mattress: any) => {
        if(mattress){
          const name = mattress?.name;
          if (Object.values(mattress).includes(name) && false === matts.some(el => el.name === name)) {
            const count = checkOccurrence(mattresses, name);
            matts.push({name: name, count: count})
          }
        }
        
      });
      setData(matts);
    }

    return (

          <Box px="4vw" key='mainNav' border='1px' borderColor='gray.200' backgroundColor={'white'}>
          <Flex alignItems='center' justifyContent="center">
            <LogoIcon boxSize={20} />
            <Spacer />
            <Box style={{position: 'relative'}}>
              <button ref={btnRef} onClick={onOpen}> 
                <CartIcon boxSize={6} />
                <CustomBadge role="cart-counter">{mattressContext?.mattresses.length}</CustomBadge>
              </button>
            </Box>
          </Flex>
          <Drawer
            size={'xs'}
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color={'#c19678'} />
              <DrawerHeader borderBottom={'1px solid #c19678'}><Heading as='h3' fontSize='1em' color={'#c19678'}>Cart Items</Heading></DrawerHeader>

              <DrawerBody>
                {
                  Object.values(data).map((mattress: any) => {
                    const name = mattress.name;
                    const count = mattress.count;
                    return (
                        <Stack key={name}>
                          <Heading as='h4' fontSize='1em' color='#A6A19A'> {name} <Badge variant='outline' colorScheme='green'>{`Qty: ${count}`}</Badge> </Heading>
                          <Divider />
                        </Stack>
                    )
                  }
                )
                }
              </DrawerBody>

              <DrawerFooter>
                {/* <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button> */}
                <Button  
                  onClick={()=>updateData([])}
                  backgroundColor={'#c19678'} 
                  color="#fff" >Clear</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          </Box>

      );
}

export default Navbar;