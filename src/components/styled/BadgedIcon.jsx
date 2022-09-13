import React from 'react';
import styled from 'styled-components';

import { Flex } from './Layout';

const StyledFlex = styled(Flex)`
  position: relative;
`;

const Badge = styled.div`
  position: absolute;
  right: -10px;
  top: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  background-color: #c19678;
  height: 16px;
  width: 16px;
  border-radius: 10px;
`;

const Count = styled.span`
  font-size: 0.6em;
  color: white;
  font-weight: 300;
`;

const BadgedIcon = ({ icon, content, testId }) => {
  return (
    <StyledFlex>
      {icon}
      <Badge>
        <Count data-testid={testId}>{content}</Count>
      </Badge>
    </StyledFlex>
  );
};

export default BadgedIcon;
