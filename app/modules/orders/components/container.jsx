import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Order from './order.jsx';
import Statuses from './statuses.jsx';
import SearchBar from './searchbar.jsx';

const statusFlags = [
	{name: "error", flagged: true}, 
	{name: "pending", flagged: true},
	{name: "inProgress", flagged: true},
	{name: "complete", flagged: true},
	{name: "incomplete", flagged: true}
]

class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Orders',
			data: [],
			filterText: ""
		};
	}

	componentDidMount() {
		console.log('Component mounted');
		this.getAllData();
	}

	getAllData() {
		axios.get('https://private-2ab82d-f4orders.apiary-mock.com/orders/?following=false&assigned=false&patientId=pat123&customerId=null')
			.then((response) => {
				console.log("Order retrieval successful");
				this.setState((prevState) => {
					return {
						data: prevState.data.concat(response.data.data.orders),
						error: true,
						pending: true,
						inProgress: true,
						complete: true,
						incomplete: true
					};
				});
			}, (error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<Statuses statuses={statusFlags} />
				<table className="table table-striped">
					<thead>
						<tr>
							<th> {this.props.title} </th>
						</tr>
					</thead>
					<tbody>
						<Order vendor="Vendor" name="Name" submission="Submission" />
						{this.state.data.map((result, index) => (
							<Order key={index} vendor={result.id} name={result.deviceId} submission={result.createdAt}/>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

Orders.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.object,
};

export default Orders;
