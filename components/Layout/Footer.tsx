import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import { ChevronDownIcon } from "@heroicons/react/solid";

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
      <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
        {linkTitle}
      </span>
      <ul className="list-unstyled text-gray-500">{items}</ul>
    </div>
  );
};

const LanguageSelector = () => {
  const languages = [
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
  ];

  const [selected, setSelected] = useState(languages[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button className="relative inline-flex w-1/3 lg:w-1/6 justify-center bg-white text-gray-700 rounded-md border border-gray-300">
        {selected.name}
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="relative w-1/3 lg:w-1/6 right-0 mt-2 divide-y divide-gray-100 bg-white rounded border-sm border-gray-300  ring-1 ring-black ring-opacity-5 focus:outline-none">
          {languages.map((lang, index) => (
            <Listbox.Option
              className="flex justify-center"
              key={index}
              value={lang}
            >
              {({ active }) => (
                <LanguageSwitcher lang={lang.code}>
                  <span
                    className={`text-gray-700 w-full px-4 py-1 text-center cursor-pointer ${
                      active ? "bg-gray-100" : ""
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
    <footer className="flex justify-center bg-gray-100 text-black py-4">
      <div className="container max-w-screen-xl px-4">
        <div className="flex flex-wrap justify-around">
          {/* LEFT */}
          <div className="w-full lg:w-6/12 px-4">
            <h3 className="text-3xl font-semibold mb-4 md:mb-0">
              <span className="text-4xl text-themecolor tracking-normal font-cursive font-light md:my-5 sm:my-5 my-5">
                TOKYO.CARDS
              </span>
            </h3>
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
