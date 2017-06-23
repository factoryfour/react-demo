import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import patientApp from './modules/patients/reducers/basic.jsx';
import AppContainer from './AppContainer.jsx';
import authApp from '../utils/auth.reducer.jsx';

const store = createStore(patientApp);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);
