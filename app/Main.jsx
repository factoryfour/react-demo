import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ordersApp from './modules/orders/reducers/index';
import App from './modules/orders/components/App'
import axios from 'axios';

var initialOrders;
axios.get('https://private-2ab82d-f4orders.apiary-mock.com/orders/?following=false&assigned=false&patientId=pat123&customerId=null')
	.then((response) => {
		console.log("Order retrieval successful");
		initialOrders = response.data.data.orders
	}, (error) => {
		console.log(error);
	});

let store = createStore(ordersApp, initialOrders)

render (
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
)
