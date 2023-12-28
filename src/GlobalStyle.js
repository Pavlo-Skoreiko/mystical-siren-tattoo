import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    word-break: break-word;
    /* background-position: center;
    background-size: 100%;
    width: 100%;
    height: 100%;
     */
    
  }
  `;
