import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  useTranslation,
  LanguageSwitcher,
  useLanguageQuery,
} from "next-export-i18n";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faTwitterSquare, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { LogoIcon } from "../Custom/CustomIcons";

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
        <Listbox.Options className="absolute language-switch divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
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

  const { t } = useTranslation();

  return (
    <footer className="flex justify-center bg-cod-gray text-black py-4 border-t-4 border-obsidian-gold">
      <div className="container px-4">
        <div className="flex flex-wrap justify-around">
          {/* LEFT */}
          <div className="w-full lg:w-6/12 px-4">
            <span className="text-4xl text-cinnabar logo-text">
              TOKYO.CARDS
              <LogoIcon height="40px" width="40px" style="inline ml-4" />
            </span>
            <p className="text-lg my-2 text-gray-500">{t("footer.summary")}</p>
            <div className="my-2 lg:my-4">
              <LanguageSelector />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-row my-6 lg:my-0 w-full lg:w-6/12 px-4 text-4xl gap-2 text-diablo-dark-gold justify-center">
            <a className="inline-block hover:text-razzmatazz" href="https://github.com" >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a className="inline-block hover:text-razzmatazz" href="https://github.com" >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a className="inline-block hover:text-razzmatazz" href="https://github.com" >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap place-content-center">
          <div className="text-sm text-cinnabar font-semibold py-1">
            <FontAwesomeIcon icon={faCopyright} /> Copyright © 2021 tokyo.cards
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
