import React, { Component } from 'react';

import InsType from './form/InsType';
import InsCompany from './form/InsCompany';
import Services from './form/Services';
import SearchResults from './form/SearchResults';

import {getPolicy}  from '../store/actions/PolicyActions';
import {getCompanies, getServices, checkData, delData}  from '../store/actions/CompaniesActions';
import {connect} from 'react-redux';

import styles from './Form.module.css';

class Form extends Component {
    state = {
        type: 0, //0 - ОМС; 1 - ДМС
        policyNumber: '',
        IC: undefined,
        IP: undefined,
        companiesDropDown: false,
        searchList: undefined,
        service: undefined,
        chosenServices: [],
        checkBtn: true,
        serviceInput: ''
    }
    initialState = {...this.state}

    componentDidMount(){
        this.props.dispatch(getCompanies());
        this.props.dispatch(getServices());
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
    setCompany = (data) => {
        this.setState({
            IC: data,
            companiesDropDown: !this.state.companiesDropDown
        });
        this.toggleCompanies();
    }
    
    handleSearch = (e) => {
        this.setState({
            serviceInput: e.target.value
        })
        
        let result = [];
        if(e.target.value !== '') {
            this.props.services.forEach(function(item) {
                if(item.toLowerCase().indexOf(e.target.value) !== -1) {
                    if(result.length < 3) {
                        result.push(item);
                    }
                }
            });
        }else{
            result = undefined;
        }
        this.setState({
            searchList: result,
            service: e.target.value
        });
    }

    addService = (service) => {
        let result = this.state.chosenServices;
        result.push(service);
        this.setState({
            chosenServices: result,
            searchList: undefined,
            serviceInput: ''
        });
    }

    delService = (service) => {
        let array = this.state.chosenServices;
        let index = array.indexOf(service);
        if (index !== -1) array.splice(index, 1);
        this.setState({
            chosenServices: array
        });
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.addService(this.state.service);
        }
    }

    clickCheck = () => {
        if(this.state.IP === undefined){
            this.props.alertToggle();
        }else if(this.state.chosenServices.length > 0){
            this.props.dispatch(checkData(this.state.IC.name, this.state.chosenServices));
            this.setState({
                chosenServices: [],
                checkBtn: false
            });
        }else{
            this.reset();
        }
    }

    reset = () => {
        this.setState(this.initialState);
        this.setState({
            type: 0,
            chosenServices: []
        });
        this.props.dispatch(delData());
        this.props.dispatch(getCompanies());
        this.props.dispatch(getServices());
    }

    render () {
        const button = this.state.checkBtn
            ? <button type='button' 
                    className={(this.state.IP !== undefined) ? styles.Button 
                                : styles.Button + ' ' + styles.ButtonPassive} 
                    onClick={this.clickCheck}>
                Проверить
            </button>
            : <button type='button'
                    className={styles.resetButton}
                    onClick={this.reset}>
                Новый запрос
            </button>;

        return (
            <div className={styles.Container}>
                <h3 className={styles.Title}>Проверка услуг медицинского страхования</h3>
                <form action="">

                    <InsType type = {this.state.type}/>

                    <div className={styles.Row}>
                        <div>
                            <input className={styles.PolicyInput}
                                    name="policyNumber"
                                    placeholder="Введите номер полиса"
                                    value={this.state.policyNumber}
                                    onChange={this.handleUserInput} required
                            />
                            <div className={styles.Date}>
                                {(this.state.IP  && this.state.IP.expireDate ) ? 
                                    'Дата окончания ' + this.state.IP.expireDate 
                                    : ''}
                            </div>
                        </div>
                        <InsCompany company = {this.state.IC}
                                companiesList = {this.props.companies}
                                companiesDropDown = {this.state.companiesDropDown}
                                toggleCompanies = {this.toggleCompanies} 
                                setCompany = {this.setCompany}/>
                    </div>
                    
                    <div className={styles.Subtitle}>Выберите медицинские услуги</div>
                    
                    <div className={styles.Search}>
                        <div className={(this.state.searchList) ? styles.SearchingActive : ''}>
                            <input type="text" 
                                    className={(this.state.searchList) ? styles.SearchingInput : styles.Input}
                                    onChange={this.handleSearch}
                                    onKeyPress={this.handleKeyPress}
                                    value={this.state.serviceInput}
                                    placeholder='Введите запрашиваемую услугу для пациента'/>
                            {(this.state.searchList) ? 
                                    <SearchResults list={this.state.searchList} addService={this.addService}/> 
                                    : null  }
                        </div>

                        <Services list={this.state.chosenServices} 
                                checkedList={this.state.IP ? this.props.checked : []}
                                delService={this.delService}/>
                    </div>
                    <div className={styles.ButtonBlock}>
                        {button}
                    </div>
                    
                </form>

            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        policy: store.policy.policy,
        companies: store.companies.companies,
        services: store.companies.services,
        checked: store.companies.checked
    }
}

export default connect(mapStateToProps)(Form);