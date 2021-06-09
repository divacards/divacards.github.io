import React from 'react';
import { CustomRadioGroup } from "../../components/Custom";

const SuiteItem = ({value, label, state = [], onChange}) => {
    const selected = value in state;
    switch (value) {
    case "s": return <label>{label}</label>;
    case "h": return <label>{label}</label>;
    case "c": return <label>{label}</label>;
    case "d": return <label>{label}</label>;
    case "j": return <label>{label}</label>;
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
