import React from "react";
import { useRouter } from "next/router";
import PageLink from "../components/PageLink";

const PageLinker = () => {
  const router = useRouter();
  const pageLinks = [
    // TODO: text translation
    { href: "/", text: "Home" },
    { href: "/collections", text: "Collections" },
    { href: "/artists", text: "Artists" },
    { href: "/forge", text: "Forge" },
  ];
  return (
    <>
      {pageLinks.map(({ text, href }) => (
        <PageLink
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
