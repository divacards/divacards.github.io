import React from "react";
import { useRouter } from "next/router";

import { PageLink, MobilePageLink } from "../components/PageLink";

const PageLinker = ({ mobile }) => {
  const router = useRouter();
  const pageLinks = [
    // TODO: text translation
    { href: "/", text: "Home" },
    { href: "/collections", text: "Collections" },
    { href: "/artists", text: "Artists" },
    { href: "/forge", text: "Forge" },
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
