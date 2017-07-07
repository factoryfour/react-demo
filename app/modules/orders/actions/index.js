export const addOrder = order => {
	return {
		type: "ADD_ORDER",
		data
	}
}

export function retrieveOrders() {
	return {
		type: "GET_ORDERS"
	}
}