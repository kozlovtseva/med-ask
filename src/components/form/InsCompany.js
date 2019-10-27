import React from 'react';

import Company from './Company';
import styles from './InsCompany.module.css';

const InsCompany = (props) => {
    let item = (props.company === undefined) ? 'Выберите страховую компанию' : 
        <>
            <img className={styles.Img} 
                src={require(`../../images/${props.company.img}.png`)} 
                alt="company_logo"/>
            <div className={styles.Text} >
                {props.company.name}
            </div> 
        </>;

    let list = props.companiesList.map((company, index) => {
        return <Company key={index}
                    setCompany = {props.setCompany}
                    {...company} />
    });
    return (
        
            <div className={styles.Container}>
                <div className={props.companiesDropDown ? styles.Input + ' ' + styles.Passive
                                                        : styles.Input }
                    onClick={props.toggleCompanies}>
                        { item }
                </div>
                <div className={props.companiesDropDown ? styles.List : styles.Passive}>
                    { list }
                </div>
                <div className={styles.Tel}>
                    {(props.company !== undefined) ? 'Телефон ' + props.company.tel : ''}
                </div>
               

                


                
            </div>
    );
};


export default InsCompany;