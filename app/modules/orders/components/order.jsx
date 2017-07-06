import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vendor: 'Vendor',
			name: 'Name',
			submission: '12-20-1999'
		};
	}

	render() {
		return (<tr>
			<td>{this.props.vendor}</td>
			<td>{this.props.name}</td>
			<td>{this.props.submission}</td>
		</tr>);
	}
}

Order.propTypes = {
	vendor: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	submission: PropTypes.string.isRequired
};

export default Order;
