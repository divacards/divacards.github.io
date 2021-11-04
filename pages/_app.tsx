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
      duration: 1000,
      delay: 100,
    });
  }, []);

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
