import React from "react";
import { useRouter } from "next/router";

import { PageLink, MobilePageLink } from "../components/Widget/PageLink";

const PageLinker = ({ mobile }: any) => {
  const router = useRouter();
  const pageLinks = [
    // TODO: text translation
    { path: "/", text: "link.home" },
    { path: "/collections", text: "link.collections" },
    { path: "/wiki", text: "link.wiki" },
    { path: "/forge", text: "link.forge" },
  ];

  const Child = mobile ? MobilePageLink : PageLink;

  return (
    <>
      {pageLinks.map(({ text, path }) => (
        <Child
          key={text}
          text={text}
          path={path}
          selected={router.pathname === path}
        />
      ))}
    </>
  );
};

export default PageLinker;
