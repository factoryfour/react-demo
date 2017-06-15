import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import patientApp from './modules/patients/reducers/basic.jsx';
import App from './App.jsx';
import test from './test.jsx';

const store = createStore(patientApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

test(store);
