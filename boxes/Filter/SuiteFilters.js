import React from "react";
import { CustomRadioGroup } from "../../components/Custom";
import { withCheck } from "../../util";

const SuiteItem = ({ value, label, state = [], onChange }) => {
  const checked = state.indexOf(value) > -1;
  switch (value) {
    case "s":
      return (
        <span
          className={withCheck("icon-spades icon-suite w-2 px-2 m-2 lg:m-auto", checked)}
          onClick={(e) => onChange(value)}
        />
      );
    case "h":
      return (
        <span
          className={withCheck("icon-hearts icon-suite w-2 px-2 m-2 lg:m-auto", checked)}
          onClick={(e) => onChange(value)}
        />
      );
    case "c":
      return (
        <span
          className={withCheck("icon-clubs icon-suite w-2 px-2 m-2 lg:m-auto", checked)}
          onClick={(e) => onChange(value)}
        />
      );
    case "d":
      return (
        <span
          className={withCheck("icon-diamonds icon-suite w-2 px-2 m-2 lg:m-auto", checked)}
          onClick={(e) => onChange(value)}
        />
      );
    case "j":
      return (
        <span
          className={withCheck("icon-joker icon-suite w-2 px-2 m-2 lg:m-auto", checked)}
          onClick={(e) => onChange(value)}
        />
      );
    default:
      return null;
  }
};

const SuiteFilters = ({ opts, state, onChange }) => {
  return (
    <CustomRadioGroup
      id="suite-select"
      instanceid="suite-select"
      items={opts}
      state={state}
      onChange={onChange}
      Child={SuiteItem}
    />
  );
};

export default SuiteFilters;
