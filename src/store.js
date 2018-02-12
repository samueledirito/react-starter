import {createStore, combineReducers, applyMiddleware} from 'redux';
import message from './messages/reducers';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import * as fromMessage from './messages/selectors';

const reducer = combineReducers({
    message
});

const middleWare = [];

middleWare.push(thunk);
const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware);


const defaultInitialState = {};

const store = createStore(
    reducer,
    defaultInitialState,
    applyMiddleware(...middleWare)
);

export default store;

export const getMessage = (state) =>
    fromMessage.getMessage(state.message);
