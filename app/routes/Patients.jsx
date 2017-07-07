import React, { Component } from 'react';
import Carousel from '../components/Carousel.jsx';
import PatientList from '../components/PatientList.jsx';
import OrderList from '../components/OrderList.jsx';

const patients = [{
	id: 123345,
	firstName: 'Doran',
	lastName: 'Walsten',
	DOB: '4/1/23'
},
{
	id: 135214,
	firstName: 'John',
	lastName: 'Smith',
	DOB: '1/1/11'
}]

const orders = [{
	id: 12345,
	device: 'sampleDevice',
	patID: 123345,
	status: false
},
{
	id: 34567,
	device: 'sampleDevice2',
	patID: 123345,
	status: true
},
{
	id: 13826,
	device: 'sample',
	patID: 135214,
	status: true
}]

const divstyle = {
	border: '1px solid red',
	height: 500,
	padding: 15
};

class Patients extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patID: null,
			patients: patients,
			orders: orders,
			selectedOrders: []
		}
	}


	onPatientClick(id) {
		console.log(id);
		this.setState({
			patID: id,
			selectedOrders: orders.filter(o => (
				o.patID === id))
		});
		console.log(this.state);
	}

	onClearClick() {
		console.log('HEY, I CLICKED CLEAR!');
		this.setState({
			patID: null,
			selectedOrders: []
		})
		console.log(this.state);
	}

	render() {
		return (<div>
			<h2>Patients</h2>
			<p>This is the patient homepage</p>
			<div className="container">
				<div className="row">
					<Carousel />
				</div>
				<div className="row">
					<PatientList patients={this.state.patients} onPatientClick={this.onPatientClick.bind(this)} />
					<div
  className="col-xs-4"
  style={divstyle}
					>
						<h1><center>Snapshot!</center></h1>
						<OrderList orders={this.state.selectedOrders} onClearClick={this.onClearClick.bind(this)}/>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Patients;

/*
const Patients = () => (
	<div>
		<h2>Patients</h2>
		<p>This is the patient homepage</p>
		<div className="container">
			<div className="row">
				<Carousel />
			</div>
			<div className="row">
				<PatientList patients={patients} onPatientClick={onPatientClick} />
				<div
  className="col-xs-4"
  style={divstyle}
				>
					<h1><center>Snapshot!</center></h1>
					<OrderList orders={orders} onClearClick={onClearClick}/>
				</div>
			</div>
		</div>
	</div>
);
*/
