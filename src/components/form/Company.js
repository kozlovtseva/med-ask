import React from 'react';

import styles from './Company.module.css';

const Company = (props) => {
    return (
        <div>
            <img src={`${props.img}`} alt="company_icon"/>
            <div> {props.name} </div>
        </div>
    );
};


export default Company;