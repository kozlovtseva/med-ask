import React from 'react';

import styles from './AlertModal.module.css'

const AlertModal = (props) => {
    return (
        <div className={styles.Container}>
            <h4 className={styles.Title}>
                Полис с таким номером не обнаружен
            </h4>
            <div className={styles.Text}>
                Попробуйте изменить данные
            </div>
            <button type='button' className={styles.Button} onClick={props.alertToggle}>
                Oк
            </button>
        </div>
    )
};


export default AlertModal;