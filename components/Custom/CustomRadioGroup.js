import React, {Fragment, useState} from 'react';

const CustomCheckbox = ({value, label, state, onChange}) => {
    return (
        <label>
            <input type="radio" className="rounded text-pink-500" value={value} checked={value==state} onChange={onChange}/>{label}
        </label>
    );
};

const CustomRadioGroup = ({items, state, onChange, Child = CustomCheckbox}) => {
    return (
        <Fragment>
          {items.map(({value, label}) => (<Child
                                            key={value}
                                            value={value} label={label}
                                            state={state}
                                            onChange={({target: { value }}) => onChange(value)} />))}
        </Fragment>
    );
};

export default CustomRadioGroup;
