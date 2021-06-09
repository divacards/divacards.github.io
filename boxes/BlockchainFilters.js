import React from 'react';
import { CustomRadioGroup } from "../components/Custom";
import { ETH_ICON } from "../components/Icon";
import { InlineIcon } from "@iconify/react";
import {ChatIcon} from "@heroicons/react/outline";

const ChainIcon = ({value, label, checked, onChange}) => {
    switch (value) {
    case "0": return <InlineIcon className="w-8 m-auto" icon={ETH_ICON} color="gray" />
    case "1": return <ChatIcon className="w-8 m-auto"/>
    default: return null
    }
};

const BlockchainFilters = ({blockchainOpts, onBlockchainSelect, state}) => {
    return (
        // <section className="flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2">
        <section className="flex flex-row justify-end w-auto">
            <CustomRadioGroup
                id="blockchain-select"
                items={blockchainOpts}
                onChange={onBlockchainSelect}
                state={state}
                Child={ChainIcon}
            ></CustomRadioGroup>
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
