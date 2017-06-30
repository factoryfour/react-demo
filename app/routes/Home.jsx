import React from 'react';
import PropTypes from 'prop-types';
import { PatientContainer } from '../modules/patients';

const Home = ({ isAuthenticated }) => (
	<div>
		<h2>Home</h2>
		<p> Im home!!!</p>
		<PatientContainer isAuthenticated={isAuthenticated} />
	</div>
);

Home.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

export default Home;
