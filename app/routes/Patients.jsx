import React from 'react';
import Carousel from '../modules/patients/components/Carousel.jsx';
import PatientList from '../modules/patients/components/PatientList.jsx';
import Snapshot from '../modules/patients/components/Snapshot.jsx';

// Dummy data to populate the tables/snapshots
const patients = [
	{
		firstName: 'Doran',
		lastName: 'Walsten',
		DOB: '4/1/23',
		ID: 123345
	},
	{
		firstName: 'John',
		lastName: 'Smith',
		DOB: '1/1/11',
		ID: 135214
	}
]

const orders = [
	{
		device: 'sampleDevice',
		patID: 123345,
		status: false
	},
	{
		device: 'sampleDevice2',
		patID: 123345,
		status: true
	},
	{
		device: 'sample',
		patID: 135214,
		status: true
	}
]

const Patients = () => (
	<div>
		<h2>Patients</h2>
		<p>This is the patient homepage</p>
		<div className="container">
			<div className="row">
				<Carousel />
			</div>
			<div className="row">
				<PatientList patients={patients} />
				<Snapshot orders={[]} />
			</div>
		</div>
	</div>
);

export default Patients;
