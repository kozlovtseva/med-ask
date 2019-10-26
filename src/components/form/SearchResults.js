import React from 'react';

import SearchItem from './SearchItem'

const SearchResults = (props) => {
    let list = props.list.map((value, index) => {
        return <SearchItem key={index}
                        name={value}
                        addService={props.addService} />
    });
    return (
        <div>
            <ul>
                { list }
            </ul>
        </div>
    )
};


export default SearchResults;