import React from 'react';
import PropTypes from 'prop-types';
import Order from './order.jsx';

class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Orders'
		};
	}

	render() {
		return (<div>{this.props.title}
			<Order vendor="meow" name="mers" submission="12-48-1999" />
			<Order vendor="aim" name="yee" submission="boi" />
		</div>);
	}
}

Orders.propTypes = {
	title: PropTypes.string.isRequired
};

export default Orders;
