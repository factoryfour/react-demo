import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Order extends Component {
	constructor(props) {
		super(props);
		this.state = {
			device: props.device,
			status: props.status
		}
	}

	render() {
		const submitted = this.state.status ? 'Submitted' : 'Unsubmitted';
		return (<tr>
			<td>{this.state.device}</td>
			<td>{submitted}</td>
		</tr>
		);
	}
}
Order.propTypes = {
	device: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired
};

export default Order;
/*
const Order = ({ device, status }) => {
	const submitted = status ? 'Submitted' : 'Unsubmitted';
	return (<tr>
		<td>{device}</td>
		<td>{submitted}</td>
	</tr>
	);
};
*/
