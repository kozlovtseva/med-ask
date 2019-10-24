import React from 'react';

import Company from './Company';
import styles from './InsCompany.module.css';

const InsCompany = (props) => {

    let item = (props.company === '') ? 'Выберите страховую компанию' : <div>компания</div>;

    let list = props.companiesList.map((company, index) => {
        return <Company key={index}
                    chooseCompany = {props.chooseCompany}
                    {...company} />
    });
    return (
        <>
            <div className={props.companiesDropDown ? styles.Passive : styles.Active}
                onClick={props.toggleCompanies}>
                { item }
            </div>
            <div className={props.companiesDropDown ? styles.Active : styles.Passive}>
                { list }
            </div>
            <div>Телефон страховой</div>
        </>
    );
};


export default InsCompany;