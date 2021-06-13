import AOS from "aos";
import { useEffect, useState } from "react";
import Head from "next/head";

import "aos/dist/aos.css";

import "../styles/globals.css";
import "../styles/icon.css";
import "../styles/iconfix.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // once: true,
      easing: "ease-out-sine",
      duration: 600,
    });
  }, []);
  const [blockchain, setBlockchain] = useState("0");

  pageProps = { ...pageProps, blockchain, setBlockchain };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Germania+One&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
