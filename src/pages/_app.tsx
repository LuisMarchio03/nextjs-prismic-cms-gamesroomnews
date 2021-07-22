import { useState } from "react";

import { Header } from "../Layout/Header";

import { ThemeProvider } from "styled-components";

import light from '../styles/theme/light';
import dark from '../styles/theme/dark';

import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
