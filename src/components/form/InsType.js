import React from 'react';
import styles from './InsType.module.css';

const InsType = (props) => {
        return (
            <div className={styles.Types}>
                <div className={(props.type === 0 ) ? 
                            styles.Active + ' ' + styles.Type_left
                            : styles.Passive + ' ' + styles.Type_left}
                >
                    ОМС
                </div>
                <div className={(props.type === 1) ? 
                            styles.Active + ' ' + styles.Type_right
                            : styles.Passive + ' ' + styles.Type_right}
                >
                    ДМС
                </div>
            </div>
        );
};


export default InsType;