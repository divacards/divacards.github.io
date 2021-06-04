import React, { useState } from "react";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

import { useEagerConnect, useInactiveListener } from "../hooks";
import { getErrorMessage, injected } from "../connectors";

import Button from "./Button";

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

const BigButton = (props) => {
  const { activate, deactivate, active } = useWeb3React();

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return (
    <button
      className="block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 btn-pink text-white focus:outline-none"
      onClick={() => {
        if (!active) {
          activate(injected);
        } else {
          deactivate();
        }
      }}
    >
      {props.text}
    </button>
  );
};

const NavBar = () => {
  const { active } = useWeb3React();

  return (
    <nav className="flex flex-col lg:flex-row p-4 lg:p-0">
      <Button>
        <Link href="/collections">Collections</Link>
      </Button>
      <Button>
        <Link href="/artists">Artists</Link>
      </Button>
      <Button>
        <Link href="/forge">Forge</Link>
      </Button>
      <BigButton text={active ? "Disconnect Wallet" : "Connect Wallet"}></BigButton>
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
      <header className="flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto p-4 md:p-6">
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
