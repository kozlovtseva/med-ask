import React, {Component} from "react";

import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import Form from './components/Form';
import AlertModal from './components/AlertModal';


class Layout extends Component {
    state = {
        modalForm: true,
        alertModal: false
    }

    // toggleModal = () => {
	// 	this.setState({
	// 		modalForm: !this.state.modalForm
    //     });
    // }

    alertToggle = () => {
		this.setState({
            alertModal: !this.state.alertModal,
            modalForm: !this.state.modalForm
        });
    }

    render() {
        const alertModal = this.state.alertModal ? (
			<>
				<Modal classesNames='Alert'>
					<AlertModal alertToggle={this.alertToggle}/>
				</Modal>
                <Backdrop show/>
			</>
        ) : null;
        const modalForm = this.state.modalForm ? (
			<>
				<Modal>
					<Form
                        alertToggle={this.alertToggle}
					/>
				</Modal>
                <Backdrop show closeModal={this.toggleModal}/>
			</>
        ) : null;
        return (
            <div>
                { modalForm }
                { alertModal }
            </div>
        )
    
    }
}

export default Layout
