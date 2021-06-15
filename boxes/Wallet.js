import { StatusOfflineIcon } from "@heroicons/react/solid";
import React, { Fragment, useEffect } from "react";
import classNames from "classnames";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import { formatEther } from "@ethersproject/units";
import { InlineIcon } from "@iconify/react";

import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { Menu, Transition, Popover } from "@headlessui/react";

import { fetcher, contractFetcher } from "../fetcher";
import {
  CHAIN_CONFIG,
  BSC_CHAINID,
  ETH_MAINNET_CHAINID,
  MATIC_CHAINID,
} from "../consts";
import WETH_ABI from "../abis/WETH.json";

import { ETH_ICON } from "../components/Icon";
import Avatar from "../components/Avatar";
import { BlockchainFilters } from "./Filter";

function shortenETHAddr(addr) {
  const len = addr.length;
  return addr.substring(0, 8) + ".." + addr.substring(len - 6, len);
}

const WalletItem = ({ label, value }) => {
  return (
    <div className="flex py-1 text-md">
      <label>{label}</label>
      <span className="flex-grow" />
      <span className="text-highlight">{value}</span>
    </div>
  );
};

const DisconnectButton = () => {
  const { deactivate, active } = useWeb3React();

  return (
    <Popover.Button className="btn-black rounded-md inline-flex">
      <div
        className="flex flex-row gap-1"
        onClick={() => {
          console.log("disconnect");
          active ? deactivate() : null;
        }}
      >
        <span>Disconnect</span>
        <StatusOfflineIcon className="inline h-5 w-5" aria-hidden="true" />
      </div>
    </Popover.Button>
  );
};

export const Wallet = () => {
  const { library, chainId, account } = useWeb3React();

  const { data: balance } = useSWR([chainId, "getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });

  const { data: blockNumber, mutate } = useSWR(
    [chainId, "getBlockNumber", "latest"],
    {
      fetcher: fetcher(library),
    }
  );

  useEffect(() => {
    console.log("subcribing for blocks...");
    library.on("block", () => {
      console.log("update block number...");
      mutate(undefined, true);
    });

    return () => {
      console.log("unsubscribing for blocks..");
      library.removeAllListeners("block");
    };
  }, []);

  const currencyConf = CHAIN_CONFIG[chainId].currency;
  const paymentConf = CHAIN_CONFIG[chainId].currency.payment;
  const addr = paymentConf.contract;
  const { data: wethBalance } = useSWR([chainId, addr, "balanceOf", account], {
    fetcher: contractFetcher(library, WETH_ABI),
  });

  return (
    <Popover className="relative">
      <Popover.Button className="flex flex-row rounded-full border-2 ml-4 px-4 py-2 divide-x divide-pink-300">
        <span className="px-2 my-auto text-highlight">
          {balance ? formatEther(balance) : ""} {currencyConf.main}
        </span>
        <span className="px-2 my-auto text-highlight">
          {wethBalance ? formatEther(wethBalance) : ""} {paymentConf.symbol}
        </span>
        <Avatar value={account}></Avatar>
      </Popover.Button>

      <Popover.Panel
        className="flex flex-col origin-top-right absolute rounded
          divide-y-2 divide-pink-300 px-2 right-0 mt-2
          shadow-lg bg-white z-10"
      >
        <div className="flex flex-row py-2 space-x-20 justify-between">
          <div className="flex flex-row gap-1">
            <span className="text-black font-semibold opacity-75 m-auto">
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
          <BlockchainFilters />
        </div>

        <div className="py-2">
          <WalletItem
            label="Balance:"
            value={`${balance ? formatEther(balance) : ""} ${
              currencyConf.main
            }`}
          />
          <WalletItem
            label="Wrapped Balance:"
            value={`${wethBalance ? formatEther(wethBalance) : ""} ${
              paymentConf.symbol
            }`}
          />
          <WalletItem label="Items Count:" value={3} />
          <div className="flex flex-row mt-2">
            <DisconnectButton />
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export const MobileWallet = () => {
  const { library, chainId, account } = useWeb3React();

  if (!chainId) {
    return null;
  }

  const { data: balance } = useSWR([chainId, "getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });

  const currencyConf = CHAIN_CONFIG[chainId].currency;
  const paymentConf = CHAIN_CONFIG[chainId].currency.payment;
  const addr = paymentConf.contract;
  const { data: wethBalance } = useSWR([chainId, addr, "balanceOf", account], {
    fetcher: contractFetcher(library, WETH_ABI),
  });

  return (
    <div className="my-auto divide-y-2 divide-pink-300">
      <div className="flex flex-row justify-between py-2">
        <div className="flex flex-row gap-2">
          <span className="text-black font-semibold opacity-75 m-auto">
            {account === null ? "no account" : shortenETHAddr(account)}
          </span>

          <button className="inline my-auto w-4 h-4">
            <ClipboardCopyIcon
              className="text-gray-500 opacity-75"
              onClick={() => {
                navigator.clipboard.writeText(account);
              }}
            />
          </button>
        </div>
        <BlockchainFilters />
      </div>

      <div className="py-2">
        <WalletItem
          label="Balance:"
          value={`${balance ? formatEther(balance) : ""} ${currencyConf.main}`}
        />
        <WalletItem
          label="Wrapped Balance:"
          value={`${wethBalance ? formatEther(wethBalance) : ""} ${
            paymentConf.symbol
          }`}
        />
        <WalletItem label="Items Count:" value={3} />
        <div className="flex flex-row mt-4">
          <DisconnectButton />
        </div>
      </div>
    </div>
  );
};
