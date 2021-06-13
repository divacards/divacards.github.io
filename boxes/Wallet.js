import React, { Fragment, useEffect } from "react";
import classNames from "classnames";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import { formatEther } from "@ethersproject/units";

import { InlineIcon } from "@iconify/react";
import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";

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

const WalletItem = ({ label, value }) => {
  return (
    <div className="flex px-3 py-1 text-md">
      <label>{label}</label>
      <span className="flex-grow" />
      <span className="text-highlight">{value}</span>
    </div>
  );
};

const Wallet = () => {
  const { deactivate, active } = useWeb3React();
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
    <Menu as="div" className="relative mx-auto inline-block py-4 text-left">
      {({ open }) => (
        <>
          <Menu.Button className="flex flex-row rounded-full border-2 ml-4 px-4 py-2 divide-x divide-pink-300 left-0">
            <span className="px-2 my-auto text-highlight">
              {balance ? formatEther(balance) : ""} {currencyConf.main}
            </span>
            <span className="px-2 my-auto text-highlight">
              {wethBalance ? formatEther(wethBalance) : ""} {paymentConf.symbol}
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
            <Menu.Items className="flex flex-col origin-top-right absolute right-0 mt-2 w-48 lg:w-auto rounded shadow-lg bg-white focus:outline-none divide-y divide-pink-300 z-10">
              <div className="py-1">
                <Menu.Item>
                  <div className="flex flex-row justify-around gap-10">
                    <div className="flex flex-row gap-1 px-3">
                      <span className="text-black font-semibold opacity-75 m-auto">
                        {account === null
                          ? "no account"
                          : shortenETHAddr(account)}
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
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  <WalletItem
                    label="Balance:"
                    value={`${balance ? formatEther(balance) : ""} ${
                      currencyConf.main
                    }`}
                  />
                </Menu.Item>
                <Menu.Item>
                  <WalletItem
                    label="Wrapped Balance:"
                    value={`${wethBalance ? formatEther(wethBalance) : ""} ${
                      paymentConf.symbol
                    }`}
                  />
                </Menu.Item>
                <Menu.Item>
                  <WalletItem label="Items Count:" value={3} />
                </Menu.Item>
                <Menu.Item>
                  <div className="flex flex-row">
                    <button
                      className="px-4 py-2 text-sm bg-black text-white"
                      onClick={() => (active ? deactivate() : null)}
                    >
                      Disconnect
                    </button>
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Wallet;
