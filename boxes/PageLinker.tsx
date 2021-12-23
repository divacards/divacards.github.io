import React from "react";
import { useRouter } from "next/router";

import { PageLink, MobilePageLink } from "../components/Widget/PageLink";
import { faBookmark, faWandMagicSparkles, faHouseChimney, faBookSkull } from '@fortawesome/free-solid-svg-icons'

const PageLinker = ({ mobile }: any) => {
  const router = useRouter();
  const pageLinks = [
    // TODO: text translation
    { path: "/", text: "link.home", icon: faHouseChimney },
    { path: "/collections", text: "link.collections", icon: faBookmark },
    { path: "/wiki", text: "link.wiki", icon: faBookSkull },
    { path: "/temple", text: "link.temple", icon: faWandMagicSparkles },
  ];

  const Child = mobile ? MobilePageLink : PageLink;

  return (
    <>
      {pageLinks.map(({ text, path, icon }) => (
        <Child
          icon={icon}
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
