import React from "react";
import { SortDescendingIcon, SortAscendingIcon } from "@heroicons/react/solid";

const OrderFilters = ({ state, onChange }) => {
  switch (state) {
    case 0:
      return (
        <div className="flex flex-row border-solid border-2 border-pink-400 rounded h-9">
          <SortAscendingIcon
            className="w-8 m-auto"
            onClick={(e) => onChange(1)}
          />
        </div>
      );
    case 1:
      return (
        <div className="flex flex-row border-solid border-2 border-light-blue-500 rounded h-9">
          <SortDescendingIcon
            className="w-8 m-auto"
            onClick={(e) => onChange(0)}
          />
        </div>
      );
    default:
      return null;
  }
};

export default OrderFilters;
