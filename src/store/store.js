import { createStore, combineReducers, applyMiddleware } from 'redux';

// Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import { companiesReducer } from './reducers/companiesReducer';
import { policyReducer } from './reducers/policyReducer';


const reducers = combineReducers({
    companies: companiesReducer,
    policy: policyReducer
});

const middleware = applyMiddleware(promise, logger, thunk);

const store = createStore(reducers, middleware);

export default store;
