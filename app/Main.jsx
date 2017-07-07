import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';
import patientSnap from './reducers/patientSnap.js';

const initialState =
	{
		patID: null,
		orders: [{
			id: 12345,
			device: 'sampleDevice',
			patID: 123345,
			status: false
		},
		{
			id: 34567,
			device: 'sampleDevice2',
			patID: 123345,
			status: true
		},
		{
			id: 13826,
			device: 'sample',
			patID: 135214,
			status: true
		}],
		patients: [{
			id: 123345,
			firstName: 'Doran',
			lastName: 'Walsten',
			DOB: '4/1/23'
		},
		{
			id: 135214,
			firstName: 'John',
			lastName: 'Smith',
			DOB: '1/1/11'
		}]
	};
const store = createStore(patientSnap, initialState);
console.log(store.getState());

ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('app'));
