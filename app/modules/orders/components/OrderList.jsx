import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order.jsx';

const OrderList = ({ orders }) => (
	<table className="table">
		<thead>
			<tr>
				<th>Device</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			{orders.map(order => (
				<Order
  device={order.device}
  status={order.status}
				/>
			))}
		</tbody>
	</table>
);

OrderList.propTypes = {
	orders: PropTypes.array.isRequired
};

export default OrderList;
