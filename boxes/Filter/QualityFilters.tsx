import React from "react";
import { CustomRadioGroup } from "../../components/Custom";
import { withCheck } from "../../util";

const SuiteItem = ({ value, label, state = [], onChange }) => {
  const checked = state.indexOf(value) > -1;
  switch (value) {
    case "common":
      return (
        <span
          className={withCheck(
            "icon-spades icon-suite my-auto lg:m-auto",
            checked
          )}
          onClick={(e) => onChange(value)}
        />
      );
    case "h":
      return (
        <span
          className={withCheck(
            "icon-hearts icon-suite my-auto lg:m-auto",
            checked
          )}
          onClick={(e) => onChange(value)}
        />
      );
    case "c":
      return (
        <span
          className={withCheck(
            "icon-clubs icon-suite my-auto lg:m-auto",
            checked
          )}
          onClick={(e) => onChange(value)}
        />
      );
    case "d":
      return (
        <span
          className={withCheck(
            "icon-diamonds icon-suite my-auto lg:m-auto",
            checked
          )}
          onClick={(e) => onChange(value)}
        />
      );
    case "j":
      return (
        <span
          className={withCheck(
            "icon-joker icon-suite my-auto lg:m-auto",
            checked
          )}
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
      // id="suite-select"
      // instanceid="suite-select"
      items={opts}
      state={state}
      onChange={onChange}
      Child={SuiteItem}
    />
  );
};

export default SuiteFilters;
