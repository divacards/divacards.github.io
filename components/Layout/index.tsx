import React from "react";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Header from "./Header";
import Footer from "./Footer";

export function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Header />
        <main className="md:px-4 sm:px-10 lg:px-20 2xl:px-40">{children}</main>
        <Footer />
      </Web3ReactProvider>
    </>
  );
};
export default Layout;
