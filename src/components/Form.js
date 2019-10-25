import React, { Component } from 'react';

import InsType from './form/InsType';
import InsCompany from './form/InsCompany';
import Services from './form/Services';

import {getPolicy}  from '../store/actions/PolicyActions';
import {connect} from 'react-redux';

// import styles from './Form.module.css';

class Form extends Component {
    state = {
        type: 0, //0 - ОМС; 1 - ДМС
        policyNumber: '',
        IC: undefined,
        IP: undefined,
        companiesList: [],
        companiesDropDown: false
    }

    componentDidUpdate(prevProps) {
        if (this.props.policy !== prevProps.policy) { 
            if(this.props.policy !== undefined){//если полис найден в базе
                this.setState({
                    IP: this.props.policy,
                    type: this.props.policy.type,
                    IC: this.props.policy.IC
                })
            }else{ //полис не найден
                this.setState({
                    type: 0,
                    IC: undefined,
                    IP: undefined
                })
            }
        }
    }
    
    //номер полиса
    handleUserInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.dispatch(getPolicy(e.target.value));
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
                        <div>
                            {(this.state.IP !== undefined) ? this.state.IP.expireDate : ''}
                        </div>
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

function mapStateToProps(store) {
    return {
        policy: store.policy.policy
    }
}

export default connect(mapStateToProps)(Form);