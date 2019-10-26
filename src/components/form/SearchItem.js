import React from 'react';

const SearchItem = (props) => {
    return (
        <li onClick={() => props.addService(props.name)} >
            {props.name}
        </li>
    )
};


export default SearchItem;