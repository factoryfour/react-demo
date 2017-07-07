import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Patient from './Patient.jsx';

class PatientList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			patients: props.patients,
			onPatientClick: props.onPatientClick
		}
	}

	render() {
		const divstyle = {
			border: '1px solid blue',
			height: 500,
			padding: 15
		};
		return (<div className="col-xs-8" style={divstyle}>
			<h1><center>Patient List</center></h1>
			<table className="table">
				<thead>
					<tr>
						<th>Last Name</th>
						<th>First Name</th>
						<th>Date of Birth</th>
					</tr>
				</thead>
				<tbody>
					{this.state.patients.map(patient => (
						<Patient
  key={patient.id}
  firstName={patient.firstName}
  lastName={patient.lastName}
  DOB={patient.DOB}
  onClick={this.state.onPatientClick}
						/>
					))}
				</tbody>
			</table>
		</div>
		);
	}
}

PatientList.propTypes = {
	patients: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			firstName: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
			DOB: PropTypes.string.isRequired
		}).isRequired,
	).isRequired,
	onPatientClick: PropTypes.func.isRequired
};

export default PatientList;

/*
const PatientList = ({ patients, onPatientClick }) => {
	const divstyle = {
		border: '1px solid blue',
		height: 500,
		padding: 15
	};
	return (<div className="col-xs-8" style={divstyle}>
		<h1><center>Patient List</center></h1>
		<table className="table">
			<thead>
				<tr>
					<th>Last Name</th>
					<th>First Name</th>
					<th>Date of Birth</th>
				</tr>
			</thead>
			<tbody>
				{patients.map(patient => (
					<Patient
  key={patient.id}
  firstName={patient.firstName}
  lastName={patient.lastName}
  DOB={patient.DOB}
  onClick={() => onPatientClick(patient.id)}
					/>
				))}
			</tbody>
		</table>
	</div>
	);
};
*/
