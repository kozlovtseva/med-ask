import React from 'react';

import ServicesItem from './ServicesItem'

const Services = (props) => {
    let items = props.list.map((value, index) => {
        return <ServicesItem key={index}
                        name={value}/>
    });
    return (
        <>
            <ul>
                {items}
            </ul>
        </>
    );
};


export default Services;