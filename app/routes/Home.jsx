import React from 'react';
import PropTypes from 'prop-types';
// import PatientContainer from '../modules/patients';
import PatientContainer from 'bundle-loader?lazy!../modules/patients';
import Bundle from '../modules/bundle/Bundle';

const Home = ({ isAuthenticated }) => (
	<div>
		<h2>Home</h2>
		<p> Im home!!!</p>
		<Bundle load={PatientContainer}>
			{ PatientContainer => (PatientContainer
			? <PatientContainer isAuthenticated={isAuthenticated} />
			: <h1>Loading...</h1>
		)}
		</Bundle>

	</div>
);

Home.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

export default Home;
