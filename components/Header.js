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
import { ETH_ICON } from "./Icon";

function shortenETHAddr(addr) {
  const len = addr.length;
  return addr.substring(0, 8) + ".." + addr.substring(len - 6, len);
}

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

const MenuItem = (props) => (
  <Menu.Item onClick={props.onClick}>
    {({ active }) => (
      <a
        href="#"
        className={classNames(
          active ? "bg-pink-700 opacity-75 text-gray-100" : "text-gray-700",
          "block px-4 py-2 text-sm"
        )}
      >
        {props.children}
      </a>
    )}
  </Menu.Item>
);

const AvatarDropdown = () => {
  const { deactivate, active } = useWeb3React();
  const { library, chainId, account } = useWeb3React();
  const [balance, setBalance] = React.useState();

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

  return (
    <Menu as="div" className="relative mx-auto inline-block py-4 text-left">
      {({ open }) => (
        <>
          <Menu.Button className="flex flex-row rounded-full border-2 ml-4 px-4 py-2 divide-x divide-pink-300">
            <span className="px-2 my-auto text-highlight">
              {balance ? formatEther(balance) : ""} ETH
            </span>
            <Avatar value={account}></Avatar>
          </Menu.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="flex flex-col origin-top-right absolute right-0 mt-2 w-48 rounded shadow-lg bg-white focus:outline-none divide-y divide-pink-300">
              <div className="py-1">
                <Menu.Item>
                  <div className="flex flex-col px-4 py-2 text-sm">
                    <div className="flex flex-row gap-1">
                      <span className="text-black font-semibold opacity-75">
                        {account === null ? "no account" : shortenETHAddr(account)}
                      </span>

                      <button className="inline my-auto w-4 h-4">
                        <ClipboardCopyIcon
                          className="text-gray-500 opacity-75"
                          onClick={() => {
                            navigator.clipboard.writeText(account);
                          }}
                        ></ClipboardCopyIcon>
                      </button>
                    </div>
                    <div className="flex flex-row gap-2">
                      <InlineIcon className="my-auto" icon={ETH_ICON} color="gray" />
                      <span className="text-highlight">
                        {balance ? formatEther(balance) : ""} ETH
                      </span>
                    </div>
                  </div>
                </Menu.Item>
              </div>
              <div className="py-1">
                <MenuItem onClick={() => (active ? deactivate() : null)}>
                  Disconnect
                </MenuItem>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

const NavBar = () => {
  const { active } = useWeb3React();
  const router = useRouter();

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  const pageLinks = [
    // TODO: text translation
    { href: "/collections", text: "Collections" },
    { href: "/artists", text: "Artists" },
    { href: "/forge", text: "Forge" },
  ];

  return (
    <nav className="flex flex-col lg:flex-row p-4 lg:p-0">
      {pageLinks.map((pl) => {
        return (
          <Button key={pl.text}>
            <Link href={pl.href}>
              <span className={router.pathname === pl.href ? "font-bold" : null}>
                {pl.text}
              </span>
            </Link>
          </Button>
        );
      })}
      {!active ? <BigButton /> : <AvatarDropdown />}
    </nav>
  );
};

const Header = () => {
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

  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8">
        <Logo name="diva.cards"></Logo>
        <NavBar></NavBar>
      </header>
      <div className="mx-auto text-center">
        <p>Account: {account === null ? "no account" : account}</p>
        <p>
          Balance:{" "}
          {balance === null ? "Not connected" : balance ? formatEther(balance) : ""}
        </p>
        <p>Block number: {blockNumber === null ? "Error" : blockNumber ?? ""}</p>
        <p>Error: {!error ? "No error" : getErrorMessage(error)}</p>
      </div>
    </>
  );
};

export default Header;
