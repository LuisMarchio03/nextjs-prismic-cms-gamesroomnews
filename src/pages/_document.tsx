import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="/logo.svg" type="image/svg" />

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2255790082666036"
          ></script>

          <meta name="author" content="Luís Gabriel Marchió Batista" />
          <meta
            name="description"
            content="Venha para o lado gamer da força | Games Room News."
          />
          <meta
            name="keywords"
            content="games, jogos, videogame, blog de jogos, gamesroomnews, consoles, portal gamer"
          />
          <meta name="robots" content="index,follow" />

          <meta
            property="og:title"
            content="Games Room News | Universo Gamer"
          />
          <meta property="og:site_name" content="Games Room News" />
          <meta
            property="og:description"
            content="Venha para o lado gamer da força | Games Room News."
          />
          <meta property="og:url" content="https://gamesroomnews.vercel.app" />
          <meta property="og:image" content="/logo.svg" />
          <meta property="og:image:type" content="image/svg" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-DNY0QRBTJ2"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', '${process.env.CONFIG_ANALYTICS}');
              `,
            }}
          />

          <script data-ad-client="ca-pub-1736612806152614" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
