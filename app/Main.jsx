import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';
import patientSnap from './reducers/patientSnap.js';

const store = createStore(patientSnap);

ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('app'));
