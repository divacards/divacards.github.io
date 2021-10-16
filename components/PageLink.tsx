import React from "react";

import Link from "next/link";

const Button = React.forwardRef(
  // @ts-expect-error
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
        // @ts-expect-error
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

const MobileButton = React.forwardRef(
  // @ts-expect-error
  ({ onClick, href, children, selected }, ref) => {
    return (
      <button
        className={`px-3 py-2 text-base text-left font-medium rounded-lg capitalize ${
          selected
            ? "bg-pink-500 text-white"
            : "text-pink-500 hover:text-pink-900"
        }`}
        href={href}
        onClick={onClick}
        // @ts-expect-error
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export const PageLink = ({ text, href, selected }) => {
  return (
    <Link href={href} passHref>
      {/* @ts-expect-error */}
      <Button selected={selected}>{text}</Button>
    </Link>
  );
};

export const MobilePageLink = ({ text, href, selected }) => {
  return (
    <Link href={href} passHref>
      {/* @ts-expect-error */}
      <MobileButton selected={selected}>{text}</MobileButton>
    </Link>
  );
};
