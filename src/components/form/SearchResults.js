import React from 'react';

import SearchItem from './SearchItem';
import styles from './SearchResults.module.css'

const SearchResults = (props) => {
    let list = props.list.map((value, index) => {
        return <SearchItem key={index}
                        name={value}
                        addService={props.addService} />
    });
    return (
        <div>
            <ul className={styles.List}>
                { list }
            </ul>
        </div>
    )
};


export default SearchResults;