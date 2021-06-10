import React from "react";
import { CustomRadioGroup } from "../../components/Custom";
import { withCheck } from "../../util";

const ChainIcon = ({ value, label, state, onChange }) => {
  const checked = value == state;
  switch (value) {
    case "0":
      return (
        <span
          className={withCheck(
            "icon-binance-coin-bnb-logo w-8 m-auto",
            checked
          )}
          onClick={(e) => onChange(value)}
        />
      );
    case "1":
      return (
        <span
          className={withCheck("icon-ethereum-eth-logo w-8 m-auto", checked)}
          onClick={(e) => onChange(value)}
        >
          <span className={withCheck("path1", checked)} />
          <span className={withCheck("path2", checked)} />
          <span className={withCheck("path3", checked)} />
          <span className={withCheck("path4", checked)} />
          <span className={withCheck("path5", checked)} />
          <span className={withCheck("path6", checked)} />
        </span>
      );
    case "2":
      return (
        <span
          className={withCheck("icon-polygon-matic-logo w-8 m-auto", checked)}
          onClick={(e) => onChange(value)}
        />
      );
    default:
      return null;
  }
};

const BlockchainFilters = ({ opts, onChange, state }) => {
  return (
    <section className="flex flex-row justify-end w-auto">
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

// const BlockchainFilters = (props) => {
//   return (
//     <section className="flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2">
//       <CustomSelect
//         id="blockchain-select"
//         instanceId="blockchain-select"
//         isMulti={true}
//         placeholder="Select network"
//         options={props.blockchainOpts}
//         onChange={props.onBlockchainSelect}
//       ></CustomSelect>
//     </section>
//   );
// };

export default BlockchainFilters;
