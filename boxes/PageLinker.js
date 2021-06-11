import React from "react";
import { useRouter } from "next/router";
import PageLink from "../components/PageLink";
import { MenuIcon } from "@heroicons/react/solid";

const PageLinker = () => {
  const router = useRouter();
  const pageLinks = [
    // TODO: text translation
    { href: "/", text: "About" },
    { href: "/collections", text: "Collections" },
    { href: "/artists", text: "Artists" },
    { href: "/forge", text: "Forge" },
  ];
  return (
    <div>
      <div className="lg:flex hidden">
        {pageLinks.map(({ text, href }) => (
          <PageLink
            key={text}
            text={text}
            href={href}
            selected={router.pathname === href}
          />
        ))}
      </div>
      <div className="lg:hidden block round-full">
        <MenuIcon className="w-8 m-auto"/>
      </div>
    </div>
  );
};

export default PageLinker;
