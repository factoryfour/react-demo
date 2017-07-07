import React from 'react';
import PropTypes from 'prop-types';
import Order from './order.jsx';

const Orders = ({ orders }) => {
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
					{orders.map((order, index) => (
						<Order key={index} vendor={order.id} name={order.deviceId} submission={order.createdAt}/>
					))}
				</tbody>
			</table>
		</div>
	)
}

Orders.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			vendor: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			submission: PropTypes.string.isRequired
		}).isRequired
	)
};

export default Orders;
