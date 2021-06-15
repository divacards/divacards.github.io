import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

import { Menu, Transition } from "@headlessui/react";
import {
  SwitchHorizontalIcon,
  ClipboardCopyIcon,
} from "@heroicons/react/outline";
import { InlineIcon } from "@iconify/react";

import { BSC_CHAINID, ETH_MAINNET_CHAINID, MATIC_CHAINID } from "../consts";
import { useEagerConnect, useInactiveListener } from "../hooks";
import { getErrorMessage, injected } from "../connectors";

import Avatar from "./Avatar";
import PageLinker from "../boxes/PageLinker";
import { Wallet, MobileWallet } from "../boxes/Wallet";

// JASON
import { Popover } from "@headlessui/react";
import {
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, InformationCircleIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "about",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InformationCircleIcon,
  },
  {
    name: "collections",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "artists",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "forge",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: RefreshIcon,
  },
];

const resources = [
  // { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
];

const Logo = (props) => {
  return (
    <h1 className="flex items-center no-underline">
      <span className="text-4xl text-lightpink tracking-normal font-cursive font-light md:my-5 sm:my-5 my-5">
        <Link href="/">{props.name}</Link>
      </span>
    </h1>
  );
};

const BigButton = () => {
  const { activate, active } = useWeb3React();
  // className="block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 text-white focus:outline-none"
  return (
    <div
      className="
        bg-black bg-opacity-10 rounded-full h-12 w-12 p-2 inline-flex
        items-center justify-center text-pink-400 hover:text-gray-500
        hover:bg-gray-100 focus:outline-none focus:ring-2
        focus:ring-inset focus:ring-indigo-500"
      onTouchStart={() => {
        console.log("touch");
        if (!active) activate(injected);
      }}
      onClick={() => {
        console.log("click");
        if (!active) activate(injected);
      }}
    >
      <span className="sr-only">Close menu when ready</span>
      <SwitchHorizontalIcon className="h-6 w-6" aria-hidden="true" />
    </div>
  );
};

const AccountMenu = ({ active }) => {
  return !active ? <BigButton /> : <Wallet />;
};

const MobileAccountMenu = ({ active }) => {
  return !active ? (
    <BigButton />
  ) : (
    <Popover.Button
      className="bg-black bg-opacity-10 rounded-full h-12 w-12 p-2 inline-flex
                  items-center justify-center text-pink-400 hover:text-gray-500
                  hover:bg-gray-100 focus:outline-none focus:ring-2
                  focus:ring-inset focus:ring-indigo-500"
    >
      <span className="sr-only">Open wallet</span>
      <Avatar className="h-6 w-6" aria-hidden="true" />
    </Popover.Button>
  );
};

const LeftBar = () => {
  return (
    <div className="flex flex-row">
      <Logo className="justify-start" name="diva.cards" />
      <PageLinker />
    </div>
  );
};

const MobileLeftBar = () => {
  const router = useRouter();
  const pageLinks = [
    // TODO: text translation
    { href: "/", name: "home" },
    { href: "/collections", name: "collections" },
    { href: "/artists", name: "artists" },
    { href: "/forge", name: "forge" },
  ];
  return (
    <div className="mt-6">
      <nav className="grid gap-2">
        {pageLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`-m-3 flex items-center hover:bg-gray-50`}
          >
            <span
              className={`px-3 py-2 text-base font-medium rounded-lg ${
                router.pathname.slice(1) === item.href.slice(1)
                  ? "text-white bg-pink-500"
                  : "text-pink-500"
              } capitalize`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Header = () => {
  const { active } = useWeb3React();
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return (
    <header className="flex flex-row lg-headerbar px-6 bg-white sm:px-6 md:space-x-10 justify-between">
      <div className="w-1/6">
        <span className="sr-only">Logo</span>
        <Logo className="justify-start" name="diva.cards" />
      </div>

      <section className="relative">
        <div className="flex -mr-2 pt-2 space-x-3 lg:hidden">
          {/*menu*/}
          <Popover className="inline-flex">
            {({ open }) => (
              <Fragment>
                <Popover.Button
                  className="bg-black bg-opacity-10 rounded-full h-12 w-12 p-2 inline-flex
                          items-center justify-center text-pink-400 hover:text-gray-500
                          hover:bg-gray-100 focus:outline-none focus:ring-2
                          focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                <Transition
                  show={open}
                  as={Popover.Panel}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                  focus
                  static
                  className="fixed bottom-0 inset-x-0 transition transform origin-bottom lg:hidden z-10"
                >
                  <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5 h-screen"></div>
                  </div>
                  <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <Popover.Button
                            className="bg-white rounded-full py-5 px-8 p-2 inline-flex
                          items-center justify-center text-pink-400 hover:text-gray-500
                          hover:bg-gray-100 focus:outline-none focus:ring-2
                          focus:ring-inset focus:ring-indigo-500 "
                          >
                            <span>Language</span>
                            <ChevronDownIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button
                            className="bg-white rounded-full h-16 w-16 p-2 inline-flex
                          items-center justify-center text-pink-400 hover:text-gray-500
                          hover:bg-gray-100 focus:outline-none focus:ring-2
                          focus:ring-inset focus:ring-indigo-500"
                          >
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <MobileLeftBar />
                    </div>
                  </div>
                </Transition>
              </Fragment>
            )}
          </Popover>
          {/*end menu*/}
          {/*wallet*/}
          <Popover className="inline-flex">
            {({ open }) => (
              <Fragment>
                <MobileAccountMenu active={active} />
                <Transition
                  show={open}
                  as={Popover.Panel}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                  focus
                  static
                  className="fixed bottom-0 inset-x-0 transition transform origin-bottom lg:hidden z-10"
                >
                  <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5 h-screen"></div>
                  </div>
                  <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div />
                        <div className="-mr-2">
                          <Popover.Button
                            className="bg-white rounded-full h-16 w-16 p-2 inline-flex
                          items-center justify-center text-pink-400 hover:text-gray-500
                          hover:bg-gray-100 focus:outline-none focus:ring-2
                          focus:ring-inset focus:ring-indigo-500"
                          >
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="relative px-4 mx-auto w-full inline-block py-2 text-left">
                      <MobileWallet />
                    </div>
                  </div>
                </Transition>
              </Fragment>
            )}
          </Popover>
        </div>
      </section>

      <section className="hidden lg:w-5/6 lg:flex lg:items-center lg:justify-between">
        <div className="flex space-x-10">
          <PageLinker />
        </div>
        <div className="flex justify-end items-center w-10/12">
          <span className="sr-only">Open wallet</span>
          <AccountMenu active={active} />
        </div>
      </section>
    </header>
  );
};

export default Header;
