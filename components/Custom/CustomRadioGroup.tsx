import React, { Fragment } from "react";
import { CustomCheckbox } from "./CustomCheckbox";

const CustomRadioGroup = ({
  items,
  state,
  onChange,
  Child = CustomCheckbox,
}) => {
  return (
    <Fragment>
      {items.map(({ value, label }) => (
        <Child
          key={value}
          value={value}
          label={label}
          state={state}
          onChange={onChange}
        />
      ))}
    </Fragment>
  );
};

export default CustomRadioGroup;
