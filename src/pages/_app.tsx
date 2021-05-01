import Header from "../components/Header";

import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
