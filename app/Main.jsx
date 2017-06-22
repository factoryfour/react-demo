import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import patientApp from './modules/patients/reducers/basic.jsx';
import AppContainer from './AppContainer.jsx';

const store = createStore(patientApp);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);
