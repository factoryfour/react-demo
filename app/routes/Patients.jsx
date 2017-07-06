import React from 'react';
import Carousel from '../modules/patients/components/Carousel.jsx';
import PatientList from '../modules/patients/components/PatientList.jsx';
import Snapshot from '../modules/patients/components/Snapshot.jsx';

const Patients = () => (
	<div>
		<h2>Patients</h2>
		<p>This is the patient homepage</p>
		<div className="container">
			<div className="row">
				<Carousel />
			</div>
			<div className="row">
				<PatientList />
				<Snapshot />
			</div>
		</div>
	</div>
);

export default Patients;
