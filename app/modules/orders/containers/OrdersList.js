import { connect } from 'react-redux'
import { getOrders } from '../actions'
import Orders from '../components/orders.jsx'

const retrieveOrders = (orders) => {
	return orders
}

const mapStateToProps = state => {
	return {
		orders: retrieveOrders(state.orders)
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		dispatch()
// 	}
// }

const OrdersList = connect(
	mapStateToProps
)(Orders)

export default OrdersList
