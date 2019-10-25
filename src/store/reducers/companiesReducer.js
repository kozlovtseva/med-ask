import * as Constants from '../constants';

const initialState = {
    companies: [],
    is_loading_companies: false,
};

export function companiesReducer(state = initialState, action) {
    switch (action.type) {
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
        default: { state = { ...state }; }
    }
    return state;
}