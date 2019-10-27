import * as Constants from '../constants';

const initialState = {
    companies: [],
    services: [],
    checked: [],
    is_loading_companies: false,
    is_loading_services: false,
    is_loading_checked_services: false,
};

export function companiesReducer(state = initialState, action) {
    switch (action.type) {
        //получить список страховых компаний---------------------
        case Constants.GET_COMPANIES: { //пока нет связи с беком
            state = {
                ...state,
                companies: action.payload,
                is_loading_policy: false,
            };
            break;
        }

        case Constants.GET_COMPANIES_PENDING: {
            state = { ...state, is_loading_companies: true };
            break;
        }
        case Constants.GET_COMPANIES_FULFILLED: {
            state = {
                ...state,
                companies: action.payload.data,
                is_loading_companies: false,
            };
            break;
        }
        case Constants.GET_COMPANIES_REJECTED: {
            state = {
                error_message: action.payload.message,
                is_loading_companies: false,
            };
            break;
        }

        //получить список услуг---------------------
        case Constants.GET_SERVICES: { //пока нет связи с беком
            state = {
                ...state,
                services: action.payload,
                is_loading_services: false,
            };
            break;
        }

        case Constants.GET_SERVICES_PENDING: {
            state = { ...state, is_loading_services: true };
            break;
        }
        case Constants.GET_SERVICES_FULFILLED: {
            state = {
                ...state,
                services: action.payload.data,
                is_loading_services: false,
            };
            break;
        }
        case Constants.GET_SERVICES_REJECTED: {
            state = {
                error_message: action.payload.message,
                is_loading_services: false,
            };
            break;
        }

        //получить список проверенных услуг---------------------
        case Constants.GET_CHECKED_SERVICES: { //пока нет связи с беком
            state = {
                ...state,
                checked: action.payload,
                is_loading_checked_services: false,
            };
            break;
        }

        case Constants.GET_CHECKED_SERVICES_PENDING: {
            state = { ...state, is_loading_checked_services: true };
            break;
        }
        case Constants.GET_CHECKED_SERVICES_FULFILLED: {
            state = {
                ...state,
                checked: action.payload.data,
                is_loading_checked_services: false,
            };
            break;
        }
        case Constants.GET_CHECKED_SERVICES_REJECTED: {
            state = {
                error_message: action.payload.message,
                is_loading_checked_services: false,
            };
            break;
        }
        default: { state = { ...state }; }
    }
    return state;
}