import React, { Fragment } from "react";
import { useRouter } from "next/router";
import PageLink from "../components/PageLink";
import { MenuIcon } from "@heroicons/react/solid";

const PageLinker = () => {
  const router = useRouter();
  const pageLinks = [
    // TODO: text translation
    { href: "/about", text: "About" },
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
    // <div>
    //   <div className="lg:flex hidden">
    //
    //   </div>
    //   <div className="lg:hidden block round-full">
    //     <MenuIcon className="w-8 m-auto"/>
    //   </div>
    // </div>
  );
};

export default PageLinker;
