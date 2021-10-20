import React from "react";
import { useRouter } from "next/router";

import { PageLink, MobilePageLink } from "../components/Widget/PageLink";

const PageLinker = ({ mobile }: any) => {
  const router = useRouter();
  const pageLinks = [
    // TODO: text translation
    { href: "/", text: "link-home" },
    { href: "/collections", text: "link-collections" },
    { href: "/artists", text: "link-artists" },
    { href: "/forge", text: "link-forge" },
  ];

  const Child = mobile ? MobilePageLink : PageLink;

  return (
    <>
      {pageLinks.map(({ text, href }) => (
        <Child
          key={text}
          text={text}
          href={href}
          selected={router.pathname === href}
        />
      ))}
    </>
  );
};

export default PageLinker;
