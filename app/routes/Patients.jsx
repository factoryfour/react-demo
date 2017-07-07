import React from 'react';
import Carousel from '../components/Carousel.jsx';
import PatientListContainer from '../containers/PatientListContainer.jsx';
import Snapshot from '../components/Snapshot.jsx';

const Patients = () => (
	<div>
		<h2>Patients</h2>
		<p>This is the patient homepage</p>
		<div className="container">
			<div className="row">
				<Carousel />
			</div>
			<div className="row">
				<PatientListContainer />
				<Snapshot />
			</div>
		</div>
	</div>
);

export default Patients;
