import React from 'react';

const OrderFilters = ({label, state, onChange}) => {
    switch (state) {
    case 1: return <label>asc</label>;
    case 2: return <label>desc</label>;
    default: return <label>none</label>;
    }
};

export default OrderFilters;
