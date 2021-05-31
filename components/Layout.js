import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <main>
      <Head>
        <title>{props.pageTitle}</title>
      </Head>
      {props.children}
    </main>
  );
};
export default Layout;
