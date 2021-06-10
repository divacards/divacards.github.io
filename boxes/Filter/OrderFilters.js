import React from "react";
import { SortDescendingIcon, SortAscendingIcon } from "@heroicons/react/solid";

const OrderFilters = ({ state, onChange }) => {
  switch (state) {
    case 0:
      return (
        <div className="flex flex-row">
          <span>Rarity</span>
          <SortAscendingIcon
            className="w-8 m-auto"
            onClick={(e) => onChange(1)}
          />
        </div>
      );
    case 1:
      return (
        <div className="flex flex-row">
          <span>Rarity</span>
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
