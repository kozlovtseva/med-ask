import React from 'react';

import styles from './Services.module.css'
import ServicesItem from './ServicesItem';
import CheckedServices from './CheckedServices';


const Services = (props) => {
    let items = (props.list.length > 0) 
        ? props.list.map((item, index) => {
            return <ServicesItem key={index}
                        delService={props.delService}
                        name={item}
                        />
        })
        : props.checkedList.map((item, index) => {
            return <CheckedServices key = {index} number = {index}
                            {...item}/>
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