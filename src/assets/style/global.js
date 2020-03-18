import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:Open Sans, sans-serif;
  }

  html, body, #root{
    min-height: 100%;
  }
`;
