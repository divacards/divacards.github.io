import React from "react";
import Link from "next/link";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const LinkContainer = (props) => {
  const items = props.links.map((link) => (
    <li key={link.link}>
      <a
        className="hover:text-pink-500 font-semibold block text-sm py-2"
        href={link.link}
      >
        {link.title}
      </a>
    </li>
  ));
  return (
    <div className="w-full my-8 lg:my-0 lg:w-4/12 px-4 ml-auto">
      <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
        {props.linkTitle}
      </span>
      <ul className="list-unstyled text-gray-500">{items}</ul>
    </div>
  );
};

const Footer = () => {
  const links = [
    { title: "About", link: "/about" },
    { title: "Pricing", link: "/pricing" },
    { title: "Solutions", link: "/solutions" },
  ];
  const otherLinks = [
    { title: "Press", link: "/press" },
    { title: "Terms of Services", link: "/tos" },
    { title: "Privacy", link: "/privacy" },
  ];

  return (
    <footer className="flex justify-center bg-gray-100 text-black py-4">
      <div className="container max-w-screen-xl px-4">
        <div className="flex flex-wrap justify-around">
          {/* LEFT */}
          <div className="w-full lg:w-6/12 px-4">
            <h3 className="text-3xl font-semibold mb-4 md:mb-0">
              We are here to help
            </h3>
            <p className="text-lg mt-0 mb-2 text-gray-500">
              We look forward to having you be part of our community.
            </p>
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-6/12 lg:px-4">
            <div className="flex flex-wrap items-top mb-6">
              <LinkContainer
                linkTitle="Useful Links"
                links={links}
              ></LinkContainer>
              <LinkContainer
                linkTitle="Other Resources"
                links={otherLinks}
              ></LinkContainer>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap place-content-center">
          <div className="text-sm text-lightgray font-semibold py-1">
            Copyright © 2021 diva.cards
          </div>
        </div>
        <LanguageSwitcher lang="en">English</LanguageSwitcher>|{" "}
        <LanguageSwitcher lang="ja">日本語</LanguageSwitcher>
      </div>
    </footer>
  );
};

export default Footer;
