import React, { Component } from 'react';

import InsType from './form/InsType';
import InsCompany from './form/InsCompany';
import Services from './form/Services';

// import styles from './Form.module.css';

class Form extends Component {
    state = {
        type: 1, //0 - ОМС; 1 - ДМС
        policyNumber: '',
        IC: '',
        companiesList: [],
        companiesDropDown: false
    }
    
    //номер полиса
    handleUserInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //страховые компании
    toggleCompanies = () => {
        this.setState({
			companiesDropDown: !this.state.companiesDropDown
        });
    }
    chooseCompany = (data) => {
        this.setState({
			IC: data
        });
    }

    clickCheck(event) {
        event.preventDefault();
        // this.props.dispatch(checkData(this.state.type, this.state.policyNumber, this.state.IC));
    }

    render () {
        return (
            <div>
                <h3>Проверка услуг медицинского страхования</h3>
                <form action="">

                    <InsType type = {this.state.type}/>

                    <div>
                        <input name="policyNumber"
                                placeholder="Введите номер полиса"
                                value={this.state.policyNumber}
                                onChange={this.handleUserInput} 
                        />
                        <div>Дата окончания действия полиса</div>
                    </div>
                    
                    <InsCompany company = {this.state.IC}
                                companiesList = {this.state.companiesList}
                                companiesDropDown = {this.state.companiesDropDown}
                                toggleCompanies = {this.toggleCompanies} />

                    
                    <Services/>

                    <button onClick={(e)=>{this.clickCheck(e);}}>Проверить</button>

                </form>

            </div>
        )
    }
}

export default Form;