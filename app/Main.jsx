import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as authentication } from '@factoryfour/react-authentication';
import { reducer as patientReducer } from './modules/patients';
import AppContainer from './AppContainer.jsx';

const store = createStore(
	combineReducers({
		patientApp: patientReducer,
		authApp: authentication
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
