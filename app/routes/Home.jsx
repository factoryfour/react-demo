import React from 'react';
import Patient from '../modules/patients/components/basic.jsx';
// import Orders from '../modules/orders/components/container.jsx';

const Home = () => (
	<div>
		<h2>Home</h2>
		<p> Im home!!!</p>
		<Patient name="Nikita" />
		{/*<Orders title="All Orders" />*/}
	</div>
);

export default Home;
