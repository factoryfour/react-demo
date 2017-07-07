import { connect } from 'react-redux'
import { getOrders } from '../actions'
import Orders from '../components/orders.jsx'

const mapStateToProps = state => {
	return {
		orders: state.orders,
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadData: () => {
			dispatch(retrieveOrders())
		}
	}
}

const OrdersList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Orders)

export default OrdersList
