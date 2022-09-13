import React, { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';

import { Title, Text, Flex, Button, Box } from './styled';
import { useKart } from '../context/Kart';
import { CURRENCY } from '../constants';
import SelectButton from './SelectButton';

const CarouselImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: background-image 0.8s;
`;

const InfoWrapper = styled(Box)`
  margin-left: ${({ theme }) => theme.space[5]};
`;

const TitleWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const SelectionWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.space[5]};

  p {
    margin-bottom: ${({ theme }) => theme.space[1]};
  }

  button {
    font-family: 'Source Serif Pro';
  }
`;

const PriceWrapper = styled(Flex)`
  margin-bottom: ${({ theme }) => theme.space[7]};
`;

const ButtonWrapper = styled(Flex)`
  margin-bottom: ${({ theme }) => theme.space[7]};
`;

const MattressCarousel = ({ mattresses }) => {
  const { addItem } = useKart();
  const [selected, setSelected] = useState(mattresses?.[0]);

  const selecButtonItems = useMemo(
    () => mattresses?.map(({ id, name }) => ({ text: name, id })),
    [mattresses]
  );

  const handleSelectItem = useCallback(
    (value) => setSelected(mattresses.find(({ id }) => id === value)),
    [setSelected, mattresses]
  );

  const handleAddItem = useCallback(() => {
    addItem(selected.id);
  }, [addItem, selected]);

  return (
    <Flex>
      <Box flexGrow="8">
        <CarouselImage
          image={`/img/${selected?.imageFileName}`}
          alt={selected?.name}
        />
      </Box>
      <InfoWrapper flexGrow="1">
        <TitleWrapper>
          <Title level="4" fontWeight="200">
            Choose Your Mattress
          </Title>
        </TitleWrapper>
        <SelectionWrapper>
          <Text textTransform="uppercase">select mattress type</Text>
          <SelectButton
            items={selecButtonItems}
            selectedItem={selected?.id}
            onChange={handleSelectItem}
          />
        </SelectionWrapper>
        {selected && (
          <>
            <PriceWrapper justifyContent="space-between">
              <Text>{selected?.name} Mattress</Text>
              <Text currency>{CURRENCY.symbol + selected?.price}</Text>
            </PriceWrapper>
            <ButtonWrapper>
              <Button variant="primary" onClick={handleAddItem} fullWidth>
                Add to Cart
              </Button>
            </ButtonWrapper>
          </>
        )}
      </InfoWrapper>
    </Flex>
  );
};

export default MattressCarousel;
