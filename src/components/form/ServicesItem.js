import React from 'react';

import styles from './ServicesItem.module.css'

const ServicesItem = (props) => {
    return (
        <li className={styles.Item}>
            {props.name}
        </li>
    )
};


export default ServicesItem;