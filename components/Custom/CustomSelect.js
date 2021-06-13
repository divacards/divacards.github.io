import React from "react";
import Select from "react-select";

const CustomSelect = (props) => {
  return (
    <Select
      id={props.id}
      isClearable={props.isClearable}
      instanceId={props.instanceId}
      isMulti={props.isMulti}
      placeholder={props.placeholder}
      options={props.options}
      onChange={props.onChange}
      theme={(theme) => ({
        ...theme,
        // borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "hotpink",
          neutral10: "lavender",
        },
      })}
      className="
        w-36 mt-5 
        lg:mt-0 lg:w-4/12
        xl:mt-0
        xl:w-3/12
        2xl:mt-0
      "
    />
  );
};

export default CustomSelect;
