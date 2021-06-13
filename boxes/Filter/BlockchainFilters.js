import { useWeb3React } from "@web3-react/core";

import React from "react";
import { CustomRadioGroup } from "../../components/Custom";
import { withCheck } from "../../util";
import {
  BSC_CHAINID,
  ETH_MAINNET_CHAINID,
  ETH_RINKEBY_CHAINID,
  MATIC_CHAINID,
} from "../../consts";

const ChainIcon = ({ value, onChange }) => {
  const { chainId } = useWeb3React();
  console.log(value, chainId);

  const checked = chainId === value;
  if (value === BSC_CHAINID) {
    return (
      <span
        className={withCheck("icon-binance-coin-bnb-logo w-8 m-auto", checked)}
        // onClick={(e) => onChange(value)}
      />
    );
  } else if (value === ETH_MAINNET_CHAINID) {
    return (
      <span
        className={withCheck(
          "icon-ethereum-eth-logo w-8 m-auto",
          checked || chainId == ETH_RINKEBY_CHAINID
        )}
        // onClick={(e) => onChange(value)}
      >
        <span className={withCheck("path1 multi-icon", checked)} />
        <span className={withCheck("path2 multi-icon", checked)} />
        <span className={withCheck("path3 multi-icon", checked)} />
        <span className={withCheck("path4 multi-icon", checked)} />
        <span className={withCheck("path5 multi-icon", checked)} />
        <span className={withCheck("path6 multi-icon", checked)} />
      </span>
    );
  } else if (value === MATIC_CHAINID) {
    return (
      <span
        className={withCheck("icon-polygon-matic-logo w-8 m-auto", checked)}
        // onClick={(e) => onChange(value)}
      />
    );
  }

  return null;
};

const BlockchainFilters = ({ opts, onChange, state }) => {
  return (
    <section className="flex flex-row justify-around">
      <CustomRadioGroup
        id="blockchain-select"
        items={opts}
        onChange={onChange}
        state={state}
        Child={ChainIcon}
      />
    </section>
  );
};

export default BlockchainFilters;
