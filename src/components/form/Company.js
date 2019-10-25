import React from 'react';

// import styles from './Company.module.css';

const Company = (props) => {
    console.log(props);
    return (
        <div>
            <img src={require(`../../images/${props.img}.png`)} alt="company_icon"/>
            <div> {props.name} </div>
        </div>
    );
};


export default Company;