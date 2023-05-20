import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

  body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter'
  }

  html, body {
    height: 100%;

    & > #__next {
      height: 100%;
    }
  }
`