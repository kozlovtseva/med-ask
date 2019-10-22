import React, { Component } from 'react';

import styles from './Modal.module.css';

class Modal extends Component {

    render() {
        let assignedClasses = [];
        if (this.props.classesNames) {
            assignedClasses = this.props.classesNames.split(' ');
        }
        assignedClasses.push('Modal');

        return (
            <>
                <div className={assignedClasses.map(el => styles[el]).join(' ')}>
                    {this.props.children}
                </div>
            </>
        );
  }
}

export default Modal;
