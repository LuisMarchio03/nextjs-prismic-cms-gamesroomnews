import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* :root {
    --white: #fff;

    --gray-50: #f7f8fa;
    --gray-100: #e6e8eb;
    --gray-200: #afb2b1;
    --gray-300: #979797;
    --gray-500: #808080;
    --gray-800: #494d4b;

    --green-500: #04d361;

    --blue-800: #05f2db;

    --brown: #8c3f3f;

    --purple-300: #9164fa;
    --purple-400: #925fd9;
    --purple-500: #9450f2;
    --purple-600: #8257e5;
    --purple-800: #6f48c9;

    --discord: #404eed;
    --facebook: #2c46a3;
    --instagram: #d72c74;
    
  } */

  
@media (max-width: 1080px) {
  html {
    font-size: 93.75%; //15px
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%; // 14px
  }
}

body {
  background: ${props => props.theme.color.bg};
}

body,
input,
textarea,
button {
  font: 500 1rem Inter, sans-serif;
  color: ${props => props.theme.color.gray800};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  font-family: Lexend, sans-serif;
  color: ${props => props.theme.color.gray800};
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}

article {
  background: ${props => props.theme.color.gray50};
}

`;

