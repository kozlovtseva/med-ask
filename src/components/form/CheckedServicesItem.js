import React from 'react';


import styles from './CheckedServicesItem.module.css'

const CheckedServicesItem = (props) => {
    return (
        <li className={styles.Item} >
            <img className={styles.Img} 
                src={require(`../../images/${props.src}.png`)} 
                alt="icon"/>
            <div className={styles.Text}>
                {props.name}
            </div>
        </li>
    )
};


export default CheckedServicesItem;