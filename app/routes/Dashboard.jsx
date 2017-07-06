import React from 'react';
import Patient from '../modules/patients/components/basic.jsx';

const Dashboard = () => (
	<div className="jumbotron">
		<h2>Dashboard</h2>
		<p>Im home!!!</p>
		<Patient name="Nikita" />
	</div>
);

export default Dashboard;
