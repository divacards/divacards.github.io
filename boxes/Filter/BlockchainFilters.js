import React from "react";
import { useWeb3React } from "@web3-react/core";

import { withCheck } from "../../util";
import {
  BSC_CHAINID,
  ETH_MAINNET_CHAINID,
  ETH_RINKEBY_CHAINID,
  MATIC_CHAINID,
} from "../../consts";

const BSCIcon = ({ checked }) => (
  <span
    className={withCheck("icon-binance-coin-bnb-logo w-8 m-auto", checked)}
  />
);

const ETHIcon = ({ checked }) => (
  <span className={withCheck("icon-ethereum-eth-logo w-8 m-auto", checked)}>
    <span className={withCheck("path1 multi-icon", checked)} />
    <span className={withCheck("path2 multi-icon", checked)} />
    <span className={withCheck("path3 multi-icon", checked)} />
    <span className={withCheck("path4 multi-icon", checked)} />
    <span className={withCheck("path5 multi-icon", checked)} />
    <span className={withCheck("path6 multi-icon", checked)} />
  </span>
);

const MaticIcon = ({ checked }) => (
  <span className={withCheck("icon-polygon-matic-logo w-8 m-auto", checked)} />
);

const BlockchainFilters = ({ chainId }) => {
  console.log("you are on", chainId);

  const ethChecked =
    (chainId === ETH_MAINNET_CHAINID) | (chainId === ETH_RINKEBY_CHAINID);

  return (
    <section className="flex flex-row justify-between text-right gap-1">
      <ETHIcon checked={ethChecked}></ETHIcon>
      <BSCIcon checked={chainId === BSC_CHAINID}></BSCIcon>
      <MaticIcon checked={chainId === MATIC_CHAINID}></MaticIcon>
    </section>
  );
};

export default BlockchainFilters;
