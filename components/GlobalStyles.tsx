import { createGlobalStyle } from 'styled-components';
import { media } from 'utils/media';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: 255, 255, 255;
    --secondBackground: 255, 255, 255;
    --text: 10, 18, 30;
    --textSecondary: 255, 255, 255;
    --primary: 22, 115, 255; 
    --secondary: 10, 18, 30;
    --tertiary: 231, 241, 251;
    --cardBackground: 255, 255, 255;
    --inputBackground: 255, 255, 255;
    --navbarBackground: 255, 255, 255;
    --modalBackground: 255, 255, 255;
    --errorColor: 207, 34, 46;
    --successColor: 45, 206, 137;
    --lineColor: 226, 232, 240;
    --cardBoxShadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  }

  [data-theme='dark'] {
    --background: 10, 18, 30;
    --secondBackground: 23, 36, 64;
    --text: 237, 237, 238;
    --textSecondary: 255, 255, 255;
    --primary: 22, 115, 255; 
    --secondary: 10, 18, 30;
    --tertiary: 231, 241, 251;
    --cardBackground: 23, 36, 64;
    --inputBackground: 23, 36, 64;
    --navbarBackground: 23, 36, 64;
    --modalBackground: 23, 36, 64;
    --errorColor: 207, 34, 46;
    --successColor: 45, 206, 137;
    --lineColor: 45, 55, 72;
    --cardBoxShadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4);
  }

  html {
    font-size: 16px;
    ${media('<=tablet')} {
      font-size: 14px;
    }
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(var(--text));
    background: rgb(var(--background));
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #__next {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p, li, span {
    line-height: 1.5;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    line-height: 1.3;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  *:focus {
    outline: 2px solid rgb(var(--primary));
    outline-offset: 2px;
  }

  * {
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
  }

  p, li, span, h1, h2, h3, h4, h5, h6 {
    color: rgb(var(--text));
    position: relative;
    z-index: 1;
  }

  .content-area {
    background: rgba(var(--cardBackground), 0.7);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  section {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card, .section {
    background: rgba(var(--cardBackground), 0.8);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 1;
  }

  a, button, .interactive {
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 1;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default GlobalStyles;
