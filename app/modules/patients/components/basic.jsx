import React from 'react';
import PropTypes from 'prop-types';

const Patient = ({ flagged, onFlagClick }) => (
	<p>
		This is a Patient flag: {String(flagged)}
		<button onClick={() => onFlagClick()}>Toggle Flag</button>
	</p>
);

Patient.propTypes = {
	flagged: PropTypes.bool.isRequired,
	onFlagClick: PropTypes.func.isRequired
};
export default Patient;
