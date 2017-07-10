import React from 'react';
import PropTypes from 'prop-types';
import Order from './order.jsx';

const Orders = ({orders, loading}) => {
	return (
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th> {"Orders Demo"} </th>
					</tr>
				</thead>
				<tbody>
					<Order vendor="Vendor" name="Name" submission="Submission" />
					{loading ? 'Loading...': ''}
					{orders.orders.map((order, index) => (
						<Order key={index} vendor={order.id} name={order.deviceId} submission={order.createdAt}/>
					))}
				</tbody>
			</table>
		</div>
	)
}

Orders.propTypes = {
	orders: PropTypes.arrayOf(
		PropTypes.shape({
			vendor: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			submission: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	loading: PropTypes.bool.isRequired
};

export default Orders;
