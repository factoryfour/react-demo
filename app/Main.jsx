import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as patientReducer } from './modules/patients';
import AppContainer from './AppContainer.jsx';
import { reducer as authReducer } from './modules/authentication';

const store = createStore(
	combineReducers({
		patientApp: patientReducer,
		authApp: authReducer
	}),
	applyMiddleware(
		thunkMiddleware
	)
);

store.subscribe(() =>
	console.log(store.getState())
);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);
