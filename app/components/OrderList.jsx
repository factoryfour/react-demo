import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order.jsx';
import { Button } from 'react-bootstrap';

const OrderList = ({ orders, onClearClick }) => {
	if (orders.length === 0) {
		return (<p>
			Select a patient on the left to view a snapshot of orders and media.</p>
		);
	}
	return (<div>
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
  key={order.id}
  device={order.device}
  status={order.status}
					/>
				))}
			</tbody>
		</table>
		<Button
  className="pull-right"
  bsSize="small"
  onClick={() => { onClearClick(); }}
  >Clear</Button>
	</div>
	);
};

OrderList.propTypes = {
	orders: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			device: PropTypes.string.isRequired,
			status: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	onClearClick: PropTypes.func.isRequired
};

export default OrderList;
