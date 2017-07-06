import React from 'react';
import PropTypes from 'prop-types';
import Patient from './Patient.jsx';

const PatientList = ({ patients }) => {
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
  firstName={patient.firstName}
  lastName={patient.lastName}
  DOB={patient.DOB}
					/>
				))}
			</tbody>
		</table>
	</div>
	);
};

PatientList.propTypes = {
	patients: PropTypes.array.isRequired
};

export default PatientList;
