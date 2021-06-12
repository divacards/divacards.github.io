import React from "react";

import Link from "next/link";

const PageLink = ({ text, href, selected }) => {
  return (
    <span className={`px-4 py-2 flex items-center rounded-lg text-base font-medium ${selected ? "bg-pink-500 text-white" : "text-pink-500 hover:text-pink-900"}`} >
      <Link href={href}>
        {text}
      </Link>
    </span>
  );
};

export default PageLink;
