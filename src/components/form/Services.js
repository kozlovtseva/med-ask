import React from 'react';

import styles from './Services.module.css'
import ServicesItem from './ServicesItem';


const Services = (props) => {
    let items = props.list.map((value, index) => {
        return <ServicesItem key={index}
                        name={value}/>
    });
    return (
        <>
            <ul className={styles.List}>
                {items}
            </ul>
        </>
    );
};


export default Services;