import { StatusOfflineIcon } from "@heroicons/react/solid";
import React, { Fragment, useEffect } from "react";
import classNames from "classnames";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import { formatEther } from "@ethersproject/units";

import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { Menu, Transition, Popover } from "@headlessui/react";

import { fetcher, contractFetcher } from "../../web3/fetcher";
import { getPaymentConfig, getCurrencyConfig } from "../../web3/consts";
import WETH_ABI from "../../abis/WETH.json";

import Avatar from "./Avatar";
import { BlockchainFilters } from "../../boxes/Filter";

function shortenETHAddr(addr: string) {
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
  const { chainId } = useWeb3React();
  if (!chainId) {
    return null;
  }
  return <__Wallet />;
};

const __Wallet = () => {
  const { library, chainId, account } = useWeb3React();

  const { data: balance } = useSWR([chainId, "getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });

  const currencyConf = getCurrencyConfig(chainId);
  const paymentConf = getPaymentConfig(chainId);
  const addr = paymentConf.contract;
  const { data: wethBalance } = useSWR([chainId, addr, "balanceOf", account], {
    fetcher: contractFetcher(library, WETH_ABI),
  });

  return (
    <Popover>
      <Popover.Button className="flex flex-row rounded-full border-2 ml-4 px-4 py-2 divide-x divide-pink-300">
        <span className="px-2 my-auto text-highlight">
          {balance ? formatEther(balance) : ""} {currencyConf.main}
        </span>
        <span className="px-2 my-auto text-highlight">
          {wethBalance ? formatEther(wethBalance) : ""} {paymentConf.symbol}
        </span>
        <Avatar value={account} />
      </Popover.Button>

      <Popover.Panel
        className="flex flex-col origin-top-right absolute rounded
          divide-y-2 divide-pink-300 px-2 right-0 mt-2
          shadow-lg bg-white z-20"
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
          <BlockchainFilters chainId={chainId} />
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
  const { chainId } = useWeb3React();
  if (!chainId) {
    return null;
  }
  return <__MobileWallet />;
};

const __MobileWallet = () => {
  const { library, chainId, account } = useWeb3React();

  const { data: balance } = useSWR([chainId, "getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });

  const currencyConf = getCurrencyConfig(chainId);
  const paymentConf = getPaymentConfig(chainId);

  const addr = paymentConf.contract;
  const { data: wethBalance } = useSWR([chainId, addr, "balanceOf", account], {
    fetcher: contractFetcher(library, WETH_ABI),
  });

  return (
    <div className="my-auto z-20 divide-y-2 divide-pink-300">
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
        <BlockchainFilters chainId={chainId} />
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
