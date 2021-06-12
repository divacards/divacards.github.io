import React, { Fragment } from "react";
import { useRouter } from "next/router";
import PageLink from "../components/PageLink";
import { MenuIcon } from "@heroicons/react/solid";

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
    <Fragment>
      {pageLinks.map(({ text, href }) => (
        <PageLink
          key={text}
          text={text}
          href={href}
          selected={router.pathname === href}
        />
      ))}
    </Fragment>
  );
};

export default PageLinker;
