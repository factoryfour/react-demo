export const loading = (state=false, action) => {
	switch(action.type) {
		case 'GET_ORDERS':
			return true
		case 'RECEIVE_ORDERS':
		console.log("changing loading state")
			return false
		case 'GET_ORDERS_ERROR':
			return false
		default:
			return true
	}
}

export function orders(state = {orders: [{id: "meow", deviceId:"meowmore", createdAt:"mee"}]}, action) {
	switch (action.type) {
		case 'ADD_ORDER':
			return {
				orders: [
					...state.orders,
					action.orders
				]
			}
		case 'RECEIVE_ORDERS':
			console.log("in reducer getting orders")
			console.log(action.orders)
			return {
				orders: action.orders
			}
		default:
			return state
	}
}