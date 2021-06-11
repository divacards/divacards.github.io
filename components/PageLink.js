import React from "react";

import Link from "next/link";
import Button from "./Button";

const PageLink = ({ text, href, selected }) => {
  return (
    <span className={`p-2 flex items-center rounded-lg text-base font-medium ${selected ? "bg-pink-500 text-white" : "text-pink-500 hover:text-pink-900"}`} >
      <Link href={href}>
        <span className={selected ? "page-selected" : null}>{text}</span>
      </Link>
    </span>
  );
};

export default PageLink;
