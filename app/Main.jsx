import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import patientApp from './modules/patients/reducers/basic.jsx';
import AppContainer from './AppContainer.jsx';
import authApp from '../utils/auth.reducer.jsx';

const store = createStore(
	combineReducers({
		patientApp,
		authApp
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
