import React, {useState} from 'react';

const CustomCheckbox = ({value, label, checked, onChange}) => {
    return (
        <div>
            <input type="radio" className="rounded text-pink-500" value={value} checked={value==1} onChange={onChange}/>{label}
        </div>
    );
};

const CustomRadioGroup = ({items, state, onChange}) => {
    // const [network, onSelect] = useState(state);
    return (
        <div>
          {items.map(({value, label}) => (<CustomCheckbox
                                            key={value}
                                            value={value} label={label}
                                            checked={value==state}
                                            onChange={onChange} />))}
        </div>
    );
};

export default CustomRadioGroup;
