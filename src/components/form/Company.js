import React from 'react';

import styles from './Company.module.css';

const Company = (props) => {
    return (
        <div className={styles.Item} onClick={() => props.setCompany(props)}>
            <img className={styles.Img} src={require(`../../images/${props.img}.png`)} alt="company_icon"/>
            <div> {props.name} </div>
        </div>
    );
};


export default Company;