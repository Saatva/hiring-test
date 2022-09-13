import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
`;

export const DropDownHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.neutral.second}10;
  padding: 4px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  position: absolute;
  right: -8px;
  padding: 2px;
  margin: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.neutral.third};
  border: 1px solid ${({ theme }) => theme.palette.neutral.second};
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.neutral.first};
  font-weight: 500;
  max-height: 250px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 8px 24px;
  cursor: pointer;
  white-space: nowrap;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;
