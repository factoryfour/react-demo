import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Order from './order.jsx';

class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Orders',
			data: []
		};
	}

	componentDidMount() {
		console.log('component mounted');
		this.getData();
	}

	getData() {
		axios.get('https://private-2ab82d-f4orders.apiary-mock.com/orders/?following=false&assigned=false&patientId=pat123&customerId=null')
			.then((response) => {
				console.log("Order retrieval successful");
				this.setState((prevState) => {
					console.log(response.data.data.orders)
					return {
						data: prevState.data.concat(response.data.data.orders)
					};
				});
			}, (error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				{this.props.title}
				{this.state.data.map(function(result, index) {
					return <Order key={index} vendor={result.id} name={result.deviceId} submission={result.createdAt}/>;
				})}
			</div>);
	}
}

Orders.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.object
};

export default Orders;
