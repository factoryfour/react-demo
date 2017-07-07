import { connect } from 'react-redux';
import OrderList from '../components/OrderList.jsx';
import { cancelSnapshot } from '../actions';

const getVisibleOrders = (orders, patID) => {
	if (patID == null) {
		return []
	}
	return orders.filter(o => (
		o.patID === patID)
	);
};

const mapStateToProps = (state) => {
	return {
		orders: getVisibleOrders(state.orders, state.patID)
	};
};

const mapDispatchToProps = dispatch => {
	return {

	}
}

const SelectedOrderList = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderList);

export default SelectedOrderList;
