import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ordersApp from './modules/orders/reducers/index';
import App from './modules/orders/components/App'
import api_client from './modules/orders/actions/api_client'
import { retrieveOrders } from './modules/orders/actions/index'

const store = createStore(ordersApp, {}, applyMiddleware(api_client))

render (
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
)

console.log("dispatch - retrieving orders")
store.dispatch(retrieveOrders())

console.log("get state")
console.log(store.getState())