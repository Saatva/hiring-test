import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { getMattresses } from '../services';
import { Container, Flex, Loader } from '../components/styled';
import MattressCarousel from '../components/MattressCarousel';

const HomepageContainer = styled(Container)`
  padding: ${({ theme }) => theme.space[4]} 0;
`;

function Homepage() {
  const { isLoading, data } = useQuery('mattresses', getMattresses);

  return isLoading ? (
    <Loader />
  ) : (
    <HomepageContainer fullWidth>
      <MattressCarousel mattresses={data} />
    </HomepageContainer>
  );
}

export default Homepage;
