import React, {Component} from "react";

import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import Form from './components/Form';


class Layout extends Component {
    state = {
        modalForm: true
    }

    // toggleModal = () => {
	// 	this.setState({
	// 		modalForm: !this.state.modalForm
    //     });
    // }
    render() {
        const modalForm = this.state.modalForm ? (
			<>
				<Modal>
					<Form
                        closeModal={this.toggleModal}
					/>
				</Modal>
                <Backdrop show closeModal={this.toggleModal}/>
			</>
        ) : null;
        return (
            <div>
                { modalForm }
            </div>
        )
    
    }
}

export default Layout
