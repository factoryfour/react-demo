function orders(state=[], action) {
	switch (action.type) {
		case 'GET_ORDERS':
			return state.orders
		default:
			return state
	}
}

export default orders