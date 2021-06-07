import React from "react";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

export function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const Layout = (props) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <main className="bg-white">
        <Head>
          <title>{props.pageTitle}</title>
        </Head>
        {props.children}
      </main>
    </Web3ReactProvider>
  );
};
export default Layout;
