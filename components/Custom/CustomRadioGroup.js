import React, {Fragment, useState} from 'react';

const CustomCheckbox = ({value, label, checked, onChange}) => {
    return (
        <label>
            <input type="radio" className="rounded text-pink-500" value={value} checked={checked} onChange={onChange}/>{label}
        </label>
    );
};

const CustomRadioGroup = ({items, state, onChange, Child = CustomCheckbox}) => {
    return (
        <Fragment>
          {items.map(({value, label}) => (<Child
                                            key={value}
                                            value={value} label={label}
                                            checked={value==state}
                                            onChange={({target: { value }}) => onChange(value)} />))}
        </Fragment>
    );
};

export default CustomRadioGroup;
