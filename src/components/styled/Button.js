import styled, { css } from 'styled-components';

const Button = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.75px;
  padding: 10px;
  cursor: pointer;
  border: none;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      color: white;
      background-color: ${theme.palette.primary};
    `}

  ${({ theme, variant }) =>
    variant === 'secondary' &&
    css`
      color: white;
      background-color: ${theme.palette.secondary};
    `};

  ${({ theme, variant }) =>
    variant === 'ternary' &&
    css`
      color: ${theme.palette.secondary};
      background-color: white;
      border: 1px solid ${theme.palette.tertiary};
    `};
`;

export default Button;
