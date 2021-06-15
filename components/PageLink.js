import React from "react";

import Link from "next/link";

const Button = React.forwardRef(
  ({ onClick, href, children, selected }, ref) => {
    return (
      <button
        className={`px-4 py-2 flex items-center rounded-lg text-base font-medium ${
          selected
            ? "bg-pink-500 text-white"
            : "text-pink-500 hover:text-pink-900"
        }`}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

const MobileButton = React.forwardRef(
  ({ onClick, href, children, selected }, ref) => {
    return (
      <span
        className={`px-3 py-2 text-base font-medium rounded-lg capitalize ${
          selected
            ? "bg-pink-500 text-white"
            : "text-pink-500 hover:text-pink-900"
        }`}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </span>
    );
  }
);

export const PageLink = ({ text, href, selected }) => {
  return (
    <Link href={href} passHref>
      <Button selected={selected}>{text}</Button>
    </Link>
  );
};

export const MobilePageLink = ({ text, href, selected }) => {
  return (
    <Link href={href} passHref>
      <MobileButton selected={selected}>{text}</MobileButton>
    </Link>
  );
};
