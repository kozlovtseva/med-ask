import React from 'react';
import styles from './InsType.module.css';

const InsType = (props) => {
        return (
            <>
                <div className={(props.type === 0 || props.type === undefined) ? styles.Active : styles.Passive}>
                    ОМС
                </div>
                <div className={(props.type === 1) ? styles.Active : styles.Passive}>
                    ДМС
                </div>
            </>
        );
};


export default InsType;