import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const Button = React.forwardRef(
  // @ts-expect-error
  ({ onClick, href, children, selected }, ref) => {
    return (
      <button
        className={`px-2 md:px-6 lg:px-8 py-2 rounded-lg text-base font-semibold ${selected ? "bg-diablo-dark-gold text-white" : "text-diablo-dark-gold hover:text-red-900"
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
  ({ onClick, href, children, selected, icon }, ref) => {
    return (
      <button
        className={`w-16 h-16  text-center rounded-full ${selected ? "bg-diablo-dark-gold text-white" : "text-razzmatazz hover:text-red-900"}`}
        href={href}
        onClick={onClick}
        // @ts-expect-error
        ref={ref}
      >
        <FontAwesomeIcon icon={icon} className="text-3xl" />
        {/* {children} */}
      </button>
    );
  }
);

export const PageLink = ({ text, path, selected, icon }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Link href={{ pathname: path, query }} passHref>
      {/* @ts-expect-error */}
      <Button selected={selected}>{t(text)}</Button>
    </Link>
  );
};

export const MobilePageLink = ({ text, path, selected, icon }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Link href={{ pathname: path, query }} passHref>
      {/* @ts-expect-error */}
      <MobileButton
        selected={selected}
        icon={icon}
      >
        {t(text)}
      </MobileButton>
    </Link>
  );
};

Button.displayName = "Button";
MobileButton.displayName = "MobileButton";
PageLink.displayName = "PageLink";
MobilePageLink.displayName = "MobilePageLink";
