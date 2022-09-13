import React from 'react';
import styled, { css } from 'styled-components';

const StyledTitle = styled.div`
  font-size: ${({ theme, level }) =>
    theme.typography.headingFontSizes[(level && level - 1) || 4]}em;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}
  margin: 0;
`;

export const Title = ({ as, level, children, ...rest }) => (
  <StyledTitle as={as || (level && `h${level}`) || 'p'} level={level} {...rest}>
    {children}
  </StyledTitle>
);

export const Text = styled.p`
  font-size: ${({ theme, level }) =>
    theme.typography.bodyFontSizes[(level && level - 1) || 2]}em;
  font-weight: ${({ currency, fontWeight }) =>
    (currency && 400) || fontWeight || 400};
  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}
  margin: 0;
  vertical-align: middle;
`;
