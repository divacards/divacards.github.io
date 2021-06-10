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
      className="p-1 w-12/12 lg:w-3/12"
    />
  );
};

export default CustomSelect;
