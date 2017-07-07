import React from 'react';
import PropTypes from 'prop-types';

const Order = ({ device, status }) => {
	const submitted = status ? 'Submitted' : 'Unsubmitted';
	return (<tr>
		<td>{device}</td>
		<td>{submitted}</td>
	</tr>
	);
};

Order.propTypes = {
	device: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired
};

export default Order;
