import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

import { Menu, Transition } from "@headlessui/react";
import { SwitchHorizontalIcon, ClipboardCopyIcon } from "@heroicons/react/outline";
import { InlineIcon } from "@iconify/react";

import classNames from "classnames";

import { useEagerConnect, useInactiveListener } from "../hooks";
import { getErrorMessage, injected } from "../connectors";

import Button from "./Button";
import Avatar from "./Avatar";
import PageLinker from "../boxes/PageLinker";
import Wallet from "../boxes/Wallet";

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
    // className="block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 text-white focus:outline-none"
  return (
    <SwitchHorizontalIcon
      className="w-8 rounded-full bg-gray-300 text-indigo-500"
      onClick={() => {
        if (!active) {
          activate(injected);
        }
      }}
    />
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
    <div className="flex flex-row gap-3">
      <Logo className="justify-start" name="diva.cards" />
      <PageLinker />
    </div>
  );
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
    <>
      <header className="flex flex-row justify-between w-main mx-auto bg-white shadow-lg rounded-lg lg-header">
        <LeftBar />
        <RightBar blockchainOpts={BLOCKCHAIN_OPTS} {...props} />
      </header>
    </>
  );
};

export default Header;
