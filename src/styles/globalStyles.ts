import { createGlobalStyle } from 'styled-components';
import type {} from 'styled-components/cssprop';

export const GlobalStyle = createGlobalStyle`
  html,
  body, ul, li {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }
`