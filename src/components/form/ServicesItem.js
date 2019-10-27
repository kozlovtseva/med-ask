import React from 'react';

import styles from './ServicesItem.module.css'

const ServicesItem = (props) => {
    
    return (
        <li className={styles.Item} >
            <div>
                {props.name}
            </div>
            <img className={styles.Icon} 
                src={require(`../../images/cross.png`)} 
                onClick={() => props.delService(props.name)}
                alt='icon'/>
        </li>
    )
};


export default ServicesItem;