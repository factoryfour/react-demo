import axios from 'axios';

const api_client = store => next => action => {
	console.log("meow")
	next(action)
	switch (action.type) {
		case 'GET_ORDERS':
			console.log("here")
			axios.get('https://private-2ab82d-f4orders.apiary-mock.com/orders/?following=false&assigned=false&patientId=pat123&customerId=null')
				.then((response) => {
					console.log("Order retrieval successful");
					next({
						type: "RECEIVE_ORDERS",
						orders: response.data.data.orders
					})
				}, (error) => {
					console.log(error);
					return next({
						type: "GET_ORDERS_ERROR",
						error
					})
				});
		default:
			break
	}
}

export default api_client