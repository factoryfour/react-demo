import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as patientReducer } from './modules/patients';
import AppContainer from './AppContainer.jsx';
import authApp from '../utils/auth.reducer.jsx';

// const store = createStore(
// 	combineReducers({
// 		patientApp: patientReducer,
// 		authApp
// 	}),
// 	applyMiddleware(
// 		thunkMiddleware
// 	)
// );
//
// store.subscribe(() =>
// 	console.log(store.getState())
// );

ReactDOM.render(<AppContainer />, document.getElementById('app'));
