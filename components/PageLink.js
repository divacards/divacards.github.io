import React from "react";

import Link from "next/link";

export const PageLink = ({ text, href, selected }) => {
  return (
    <button
      className={`px-4 py-2 flex items-center rounded-lg text-base font-medium ${
        selected
          ? "bg-pink-500 text-white"
          : "text-pink-500 hover:text-pink-900"
      }`}
    >
      <Link href={href}>{text}</Link>
    </button>
  );
};

export const MobilePageLink = ({ text, href, selected }) => {
  return (
    <span
      className={`px-3 py-2 text-base font-medium rounded-lg capitalize ${
        selected
          ? "bg-pink-500 text-white"
          : "text-pink-500 hover:text-pink-900"
      }`}
    >
      <Link href={href}>{text}</Link>
    </span>
  );
};
