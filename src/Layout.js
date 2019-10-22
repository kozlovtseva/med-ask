import React, {Component} from "react";

import Modal from './components/Modal';
import Form from './components/Form';

class Layout extends Component {
    state = {
        modalForm: false
    }

    toggleModal = () => {
		this.setState({
			modalForm: !this.state.modalForm
        });
    }
    render() {
        const modalForm = this.state.modalForm ? (
			<>
				<Modal classesNames='Center'>
					<Form
                        closeModal={this.toggleModal}
					/>
				</Modal>
			</>
        ) : null;
        return (
            <div>
                <button onClick={this.toggleModal}>Проверка услуг медицинского</button>
                { modalForm }
            </div>
        )
    
    }
}

export default Layout
