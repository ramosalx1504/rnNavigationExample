import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//import {Reducers} from '../../config/init';


import TestReducer from './reducers/TestReducer'; 
import StackNav from './reducers/StackContainerReducer';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers({
	test : TestReducer,
	stackNav : StackNav
});

export const initStore = () => createStoreWithMiddleware(reducer);