import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  useTranslation,
  LanguageSwitcher,
  useLanguageQuery,
} from "next-export-i18n";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { LogoIcon } from "../Custom/CustomIcons";

const LinkContainer = ({ links, linkTitle }) => {
  const { t } = useTranslation();

  const items = links.map((link: any, index: number) => (
    <li key={`${link.link}.${index}`}>
      <a
        className="hover:text-pink-500 font-semibold block text-sm py-2"
        href={link.link}
      >
        {t(`link.${link.title}`)}
      </a>
    </li>
  ));
  return (
    <div className="w-full my-4 lg:my-0 lg:w-4/12 px-4 ml-auto">
      <span className="block uppercase font-cursive text-cinnabar text-2xl font-semibold mb-2">
        {linkTitle}
      </span>
      <ul className="list-unstyled text-gray-500">{items}</ul>
    </div>
  );
};

const LanguageSelector = () => {
  const languages = {
    en: { code: "en", name: "English" },
    ja: { code: "ja", name: "日本語" },
  };

  const [selected, setSelected] = useState("en");
  const [query] = useLanguageQuery();

  useEffect(() => {
    if (query) {
      setSelected(query.lang);
    }
    return () => { };
  }, [query]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button className="language-switch px-1 inline-flex justify-between items-center text-gray-700 ">
        <span className="px-1 py-1">{languages[selected].name}</span>
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="language-switch divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {Object.values(languages).map((lang, index) => (
            <Listbox.Option
              className="flex flex-col justify-center"
              key={index}
              value={lang.code}
            >
              {({ active }) => (
                <LanguageSwitcher lang={lang.code}>
                  <span
                    className={`container text-gray-700 px-3 py-1 w-full text-center cursor-pointer ${active ? "bg-gray-100" : ""
                      }`}
                  >
                    {lang.name}
                  </span>
                </LanguageSwitcher>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

const Footer = () => {
  const links = [
    { title: "collections", link: "/collections" },
    { title: "artists", link: "/artists" },
    { title: "app", link: "/app" },
  ];
  const otherLinks = [
    { title: "opensea-market", link: "/press" },
    { title: "adam-market", link: "/tos" },
    { title: "github", link: "/github" },
    { title: "twitter", link: "/todo" },
    { title: "blog", link: "/todo" },
  ];

  const { t } = useTranslation();

  return (
    <footer className="flex justify-center bg-swirl text-black py-4 rounded-t-3xl border-t-4 border-claret">
      <div className="container px-4">
        <div className="flex flex-wrap justify-around">
          {/* LEFT */}
          <div className="w-full lg:w-6/12 px-4">
            <span className="text-4xl text-cinnabar logo-text">
              <LogoIcon height="50px" width="50px" style="inline m-2" />
              TOKYO.CARDS
            </span>
            <p className="text-lg my-2 text-gray-500">{t("footer.summary")}</p>
            <div className="my-2 lg:my-4">
              <LanguageSelector />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-row items-top mb-6 w-full lg:w-6/12 lg:px-4">
            <LinkContainer linkTitle={t("footer.links")} links={links} />
            <LinkContainer
              linkTitle={t("footer.other-links")}
              links={otherLinks}
            />
          </div>
        </div>
        <div className="flex flex-wrap place-content-center">
          <div className="text-sm text-lightgray font-semibold py-1">
            Copyright © 2021 tokyo.cards
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
