import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    let assignedClasses = [];
    if (props.classesNames) {
    assignedClasses = props.classesNames.split(' ');
    }
    assignedClasses.push('Backdrop');

    return (
        props.show
        ? (
            <div
            className={assignedClasses.map(el => classes[el]).join(' ')}
            onClick={props.closeModal}
            />
        )
        : null
    );
};

export default Backdrop;
