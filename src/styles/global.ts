import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root{
    height: 100%;
  }

  body {
    font-family: 'Spectral', serif;
    font-size: 1.6rem;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.bestialBtn};
    border-radius: 8px;

    &:hover {
      background: ${theme.colors.secondaryTxt};
    }
  }
`;

export default GlobalStyles;
