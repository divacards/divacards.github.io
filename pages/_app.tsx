import Head from "next/head";

import "../styles/globals.css";
import "../styles/icon.css";
import "../styles/iconfix.css";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
