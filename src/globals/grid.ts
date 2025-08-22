import { theme } from "./theme";
import styled, { css } from "styled-components";

type GridProps = {
  mobile?: number;
  desktop?: number;
  tablet?: number;
};

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;

  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }

  @media ${theme.screenSizes.mobile} {
    padding: 0 25px;
  }

  @media ${theme.screenSizes.tablet} {
    padding: 0 30px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1360px) {
    max-width: 1024px;
  }

  @media only screen and (min-width: 1360px) {
    max-width: 1488px;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;

  &:before,
  &:after {
    content: " ";
    display: table;
  }

  &:after {
    clear: both;
  }
`;

export const Column = styled.div<GridProps>`
  float: left;
  min-height: 1px;
  height: 100% !important;
  box-sizing: border-box;
  width: 100%;
  padding: 0.25rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && widthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    ${({ tablet }) => tablet && widthGrid(tablet)}
  }

  @media only screen and (min-width: 1024px) {
    ${({ desktop }) => desktop && widthGrid(desktop)}
  }
`;

function widthGrid(value: number) {
	const width = (value / 12) * 100;
	return css`
    width: ${width}%;
  `;
}
