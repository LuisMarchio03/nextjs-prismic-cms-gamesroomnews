import { Header } from "../Layout/Header";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
