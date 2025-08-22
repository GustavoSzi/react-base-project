import styled, { css } from "styled-components";
import { theme } from "./theme";

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  border-radius: 8px !important;
  margin: 24px auto;

  @media ${theme.screenSizes.smallScreen} {
    width: 100%;

    &::-webkit-scrollbar {
      display: block;
      height: 6px;
      background-color: #E5E5E5;
    }

    &::-webkit-scrollbar-thumb {
      display: block;
      height: 4px;
      border-radius: 8px;
      background-color: #707070;
    }
  }
`;

export const Table = styled.table`
  background-color: #FFF;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #EDEDED;

  th,
  td {
    padding: 15px 12px;

    @media ${theme.screenSizes.smallScreen} {
      padding: 12px 8px;
    }
  }
`;

export const Head = styled.thead`
  border: none;
  text-align: left;
  
  th {
    font-size: 16px;

    @media ${theme.screenSizes.smallScreen} {
      font-size: 14px;
    }
  }
`;

export const Body = styled.tbody`
  color: #000;

  tr {
    border-bottom: 1px solid #D6D6D6;
  }
  font-size: 15px;

  i {
    opacity: 0.75;
  }

  @media ${theme.screenSizes.smallScreen} {
    font-size: 12px;
  }
`;

export const CellOptions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;
`;

export const CellStatus = styled.div<{ statusId?: number }>`
  border-radius: 8px;
  padding: 4px 8px;
  text-align: center;

  ${(props) => css`
    ${props.statusId && 
        /* @ts-ignore */
        `background-color: ${theme.colors.onboardingStatus[props.statusId]}`};
      color: #000;
  `}
`;

export const CellEllipsis = styled.div<{maxWidth?: number}>`
  overflow: hidden;
  white-space: nowrap;
  max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : "80%"};
  display: inline-block;
  text-overflow: ellipsis;
  cursor: default;
`;