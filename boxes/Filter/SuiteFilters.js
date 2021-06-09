import React from 'react';
import { CustomRadioGroup } from "../../components/Custom";

const SuiteItem = ({value, label, state = [], onChange}) => {
    const selected = value in state;
    switch (value) {
    case "s": return <span className="icon-spades w-4 m-auto"/>;
    case "h": return <span className="icon-hearts w-4 m-auto"/>;
    case "c": return <span className="icon-clubs w-4 m-auto"/>;
    case "d": return <span className="icon-diamonds w-4 m-auto"/>;
    case "j": return <span className="icon-joker w-4 m-auto"/>;
    default: return null;
    }
};

const SuiteFilters = ({opts, state, onChange}) => {
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
