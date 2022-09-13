import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Container, BadgedIcon, Flex } from './styled';
import { ReactComponent as SaatvaLogo } from '../assets/svg/saatva-logo.svg';
import { ReactComponent as KartIcon } from '../assets/svg/kart-icon.svg';
import { useKart } from '../context/Kart';

const StyledNavbar = styled.div`
  background-color: white;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e3e3e3;
`;

const StyledSatvaLogo = styled(SaatvaLogo)`
  fill: ${({ theme }) => theme.palette.primary};
  height: 22px;
`;

const StyledKartIcon = styled(KartIcon)`
  height: 22px;
  transition: fill 0.25s ease;
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.palette.primary};
  }
`;

const Navbar = () => {
  const { itemCount } = useKart();

  return (
    <StyledNavbar>
      <Container fullWidth>
        <Flex justifyContent="space-between">
          <a href="/">
            <StyledSatvaLogo />
          </a>
          {/* TODO: Add a test ID to the badge count */}
          <BadgedIcon
            icon={<StyledKartIcon />}
            content={itemCount}
            testId="nav-kart-item-count"
          />
        </Flex>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
