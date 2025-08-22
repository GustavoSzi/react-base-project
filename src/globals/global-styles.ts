import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Ubuntu", sans-serif;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
        text-align: center;
    }

    img {
        width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1 { font-size: 64px; }
    h2 { font-size: 56px; }
    h3 { font-size: 48px; }
    h4 { font-size: 40px; }
    h5 { font-size: 32px; }
    h6 { font-size: 24px; }
    p { font-size: 16px; }
    small { font-size: 12px; }

    @media ${theme.screenSizes.smallScreen} {
        h1 { font-size: 54px; }
        h2 { font-size: 48px; }
        h3 { font-size: 40px; }
        h4 { font-size: 32px; }
        h5 { font-size: 24px; }
        h6 { font-size: 20px; }
    }
`

export const AppContainer = styled.main`
    /* Altura total - altura do header - altura do footer */
    min-height: calc(100dvh - 0 - 0);
`