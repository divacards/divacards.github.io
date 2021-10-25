import React from "react";

import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const Button = React.forwardRef(
  // @ts-expect-error
  ({ onClick, href, children, selected }, ref) => {
    return (
      <button
        className={`px-4 py-2 flex items-center rounded-lg text-base font-medium ${selected
          ? "bg-red-500 text-white"
          : "text-red-500 hover:text-red-900"
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
        className={`px-3 py-2 text-base text-left font-medium rounded-lg capitalize ${selected
          ? "bg-red-500 text-white"
          : "text-red-500 hover:text-red-900"
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

export const PageLink = ({ text, path, selected }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Link href={{ pathname: path, query }} passHref>
      {/* @ts-expect-error */}
      <Button selected={selected}>{t(text)}</Button>
    </Link>
  );
};

export const MobilePageLink = ({ text, path, selected }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Link href={{ pathname: path, query }} passHref>
      {/* @ts-expect-error */}
      <MobileButton selected={selected}>{t(text)}</MobileButton>
    </Link>
  );
};

Button.displayName = "Button";
MobileButton.displayName = "MobileButton";
PageLink.displayName = "PageLink";
MobilePageLink.displayName = "MobilePageLink";
