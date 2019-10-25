import * as Constants from '../constants';


const initialState = {
    policy: {},
    is_loading_policy: false,
};

export function policyReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_POLICY: { //пока нет связи с беком
            state = {
                ...state,
                policy: action.payload,
                is_loading_policy: false,
            };
            break;
        }

        case Constants.GET_POLICY_PENDING: {
            state = { ...state, is_loading_policy: true };
            break;
        }
        case Constants.GET_POLICY_FULFILLED: {
            state = {
                ...state,
                policy: action.payload,
                is_loading_policy: false,
            };
            break;
        }
        case Constants.GET_POLICY_REJECTED: {
            state = {
                error_message: action.payload,
                is_loading_policy: false,
            };
            break;
        }
        default: { state = { ...state }; }
    }
    return state;
}