import React from 'react';
import Carousel from '../components/Carousel.jsx';
import PatientList from '../components/PatientList.jsx';
import Snapshot from '../components/Snapshot.jsx';

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

const onPatientClick = (id) => {
	console.log('HEY, IT CLICKED STILL');
}

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
				<Snapshot />
			</div>
		</div>
	</div>
);

export default Patients;
