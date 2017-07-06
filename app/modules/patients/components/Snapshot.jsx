import React from 'react';
import PropTypes from 'prop-types';

const Snapshot = ({ orders }) => {
	const divstyle = {
		border:'1px solid red',
		height: 500,
		padding: 15
	};
	if (orders.length === 0) {
		return (<div className="col-xs-4"
	  style={divstyle}
		>
			<h1><center>Snapshot!</center></h1>
			<p>Select a patient on the left to view a snapshot of orders and media.</p>
		</div>
		);
	} else {
		<OrderList orders={orders} />
	}
};

Snapshot.propTypes = {
	orders: PropTypes.array.isRequired
};

export default Snapshot;
