import { createGlobalStyle } from 'styled-components';

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

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: rgb(var(--text));
    background: transparent;
    overflow-x: hidden;
  }

  #__next {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  /* Improve text readability */
  p, li, span {
    line-height: 1.8;
    font-weight: 400;
  }

  /* Add a subtle text shadow for better contrast against the fluid background */
  h1, h2, h3, h4, h5, h6 {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  /* Improve focus styles for accessibility */
  *:focus {
    outline: 2px solid rgb(var(--primary));
    outline-offset: 2px;
  }

  /* Add a subtle transition to all elements for smoother interactions */
  * {
    transition: all 0.3s ease-in-out;
  }

  /* Enhance contrast for text elements */
  p, li, span, h1, h2, h3, h4, h5, h6 {
    color: rgba(var(--text), 0.85);
    position: relative;
    z-index: 1;
  }

  /* Add backdrop filter to content areas */
  .content-area {
    background: rgba(var(--cardBackground), 0.8);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  /* Smooth transitions between sections */
  section {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    position: relative;
    z-index: 1;
  }

  /* Adjust card and section backgrounds */
  .card, .section {
    background: rgba(var(--cardBackground), 0.9);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  /* Add hover effect to interactive elements */
  a, button, .interactive {
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 1;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

export default GlobalStyles;
