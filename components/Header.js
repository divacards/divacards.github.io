import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

import { Menu, Transition } from "@headlessui/react";
import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { InlineIcon } from "@iconify/react";

import classNames from "classnames";

import { useEagerConnect, useInactiveListener } from "../hooks";
import { getErrorMessage, injected } from "../connectors";

import Button from "./Button";
import Avatar from "./Avatar";
import PageLinker from "../boxes/PageLinker";
import Wallet from "../boxes/Wallet";


// JASON
import { Popover } from '@headlessui/react'
import {
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, InformationCircleIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: 'about',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InformationCircleIcon,
  },
  {
    name: 'collections',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'artists',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'forge',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: RefreshIcon,
  },
]
const resources = [
  // { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
]


const BLOCKCHAIN_OPTS = [
    { value: "0", label: "BSC", unit: "BNB" },
    { value: "1", label: "Ethereum", unit: "ETH" },
    { value: "2", label: "Matic", unit: "MATIC" },
];

const Logo = (props) => {
  return (
    <button className="focus:outline-none p-4 lg:p-0">
      <h1 className="flex items-center no-underline">
        <span className="text-4xl text-lightpink font-bold tracking-tight font-cursive">
          <Link href="/">{props.name}</Link>
        </span>
      </h1>
    </button>
  );
};

const BigButton = () => {
  const { activate, active } = useWeb3React();

  return (
    <button
      className="block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 btn-pink text-white focus:outline-none"
      onClick={() => {
        if (!active) {
          activate(injected);
        }
      }}
    >
      Connect Wallet
    </button>
  );
};

const AccountMenu = (props) => {
  const { active } = useWeb3React();
  const router = useRouter();

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return (
    <nav className="flex flex-col lg:flex-row p-4 lg:p-0">
      {!active ? <BigButton /> : <Wallet {...props} />}
    </nav>
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
    { href: "/about", name: "about" },
    { href: "/collections", name: "collections" },
    { href: "/artists", name: "artists" },
    { href: "/forge", name: "forge" },
  ];
  return <div className="mt-6">
    <nav className="grid gap-2">
      {pageLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          // className={`-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 ${router.pathname.slice(1) === item.name? 'bg-pink-500':''}`}
          className={`-m-3 flex items-center hover:bg-gray-50`}
        >
          <span className={`ml-4 px-3 py-2 text-base font-medium rounded-lg ${router.pathname.slice(1) === item.name? 'text-white bg-pink-500':'text-pink-500'} capitalize`}>{item.name}</span>
        </Link>
      ))}
    </nav>
  </div>
};
const RightBar = (props) => {
  return <AccountMenu className="justify-start" {...props} />;
};
const Header = (props) => {
  const { library, chainId, account, error } = useWeb3React();
  const [balance, setBalance] = React.useState();
  const [blockNumber, setBlockNumber] = useState();

  React.useEffect(() => {
    if (!!library) {
      let stale = false;

      library
        .getBlockNumber()
        .then((blockNumber) => {
          if (!stale) {
            setBlockNumber(blockNumber);
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null);
          }
        });

      const updateBlockNumber = (blockNumber) => {
        setBlockNumber(blockNumber);
      };
      library.on("block", updateBlockNumber);

      return () => {
        stale = true;
        library.removeListener("block", updateBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  React.useEffect(() => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance) => {
          if (!stale) {
            setBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null);
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]);
    // <div className="mx-auto text-center">
    //   <p>Account: {account === null ? "no account" : account}</p>
    //   <p>
    //     Balance:{" "}
    //     {balance === null
    //      ? "Not connected"
    //      : balance
    //      ? formatEther(balance)
    //      : ""}
    //   </p>
    //   <p>
    //     Block number: {blockNumber === null ? "Error" : blockNumber ?? ""}
    //   </p>
    //   <p>Error: {!error ? "No error" : getErrorMessage(error)}</p>
    // </div>
  return (
    // <>
    //   <header className="flex flex-row  justify-between max-w-screen-xl mx-auto px-6 bg-white shadow-lg rounded-lg h-1 lg:items-center lg:px-20 lg:py-8">
    //     <LeftBar />
    //     <RightBar blockchainOpts={BLOCKCHAIN_OPTS} {...props} />
    //   </header>
    // </>
    <Popover className="relative">
      {({ open }) => (
        <>
          {/*<div className="flex flex-row justify-between max-w-screen-xl mx-auto px-6 bg-white shadow-lg rounded-lg h-1 lg:items-center lg:px-20 lg:py-8">*/}
          {/*  <div className="-mr-2 -my-2">*/}
          {/*    <LeftBar />*/}
          {/*    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">*/}
          {/*      <span className="sr-only">Open menu</span>*/}
          {/*      <MenuIcon className="h-6 w-6" aria-hidden="true" />*/}
          {/*    </Popover.Button>*/}
          {/*    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">*/}
          {/*      <span className="sr-only">Open wallet</span>*/}
          {/*      <RightBar blockchainOpts={BLOCKCHAIN_OPTS} {...props} />*/}
          {/*    </Popover.Button>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="flex flex-row justify-between max-w-screen-xl mx-auto px-6 bg-white lg:shadow-lg lg:rounded-lg
                          lg:items-center lg:px-20 lg:py-8 lg:h-1 sm:px-6 md:justify-start md:space-x-10">
            <div>
              <a href="#" className="flex">
                <span className="sr-only">Workflow</span>
                <Logo className="justify-start" name="diva.cards" />
              </a>
            </div>
            <div className="-mr-2 pt-3 space-x-3 md:hidden">
              <Popover.Button className="bg-black bg-opacity-10 rounded-full h-12 w-12 p-2 inline-flex
                      items-center justify-center text-pink-400 hover:text-gray-500
                      hover:bg-gray-100 focus:outline-none focus:ring-2
                      focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
              <Popover.Button className="bg-black bg-opacity-10 rounded-full h-12 w-12 p-3 inline-flex
                      items-center justify-center text-pink-400 hover:text-gray-500
                      hover:bg-gray-100 focus:outline-none focus:ring-2
                      focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open wallet</span>
                <Avatar className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <header className="flex space-x-10">
                <PageLinker />
              </header>
              <div className="flex items-center md:ml-12">
                <span className="sr-only">Open wallet</span>
                <RightBar blockchainOpts={BLOCKCHAIN_OPTS} {...props} />
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="fixed bottom-0 inset-x-0 transition transform origin-bottom md:hidden"
            >
              <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 h-screen">
                </div>
              </div>
              <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Popover.Button className="bg-white rounded-full py-5 px-8 p-2 inline-flex
                      items-center justify-center text-pink-400 hover:text-gray-500
                      hover:bg-gray-100 focus:outline-none focus:ring-2
                      focus:ring-inset focus:ring-indigo-500 ">
                        <span>Language</span>
                        <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-full h-16 w-16 p-2 inline-flex
                      items-center justify-center text-pink-400 hover:text-gray-500
                      hover:bg-gray-100 focus:outline-none focus:ring-2
                      focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-transparent divide-y-2 divide-gray-50">*/}
              {/*  */}
              {/*</div>*/}
              <div className="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <MobileLeftBar/>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
