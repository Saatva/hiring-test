import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid #e8e0d3;
  border-top: 5px solid ${({ theme }) => theme.palette.primary};
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

const LoaderContainer = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loader;
