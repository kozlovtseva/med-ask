import React from 'react';
import styles from './SearchItem.module.css'

const SearchItem = (props) => {
    return (
        <li className={styles.Item} onClick={() => props.addService(props.name)} >
            {props.name}
        </li>
    )
};


export default SearchItem;