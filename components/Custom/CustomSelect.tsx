import React from "react";
import Select from "react-select";

const CustomSelect = ({
  id,
  isClearable,
  instanceId,
  isMulti = false,
  placeholder,
  options,
  onChange,
}) => {
  const styles = {
    control: (base: any) => ({
      ...base,
      "[type='text']:focus": {
        boxShadow: "none",
      },
    }),
  };
  return (
    <Select
      id={id}
      isClearable={isClearable}
      instanceId={instanceId}
      isMulti={isMulti}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      theme={(theme) => ({
        ...theme,
        // borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "hotpink",
          primary75: "lightcoral",
          primary50: "lightpink",
          neutral10: "lavender",
        },
      })}
      styles={styles}
      className="w-full lg:w-5/12 mt-1"
    />
  );
};

export default CustomSelect;
