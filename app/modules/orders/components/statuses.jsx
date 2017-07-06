import React from 'react';
import PropTypes from 'prop-types';
import Status from './status.jsx';

const Statuses = ({ statuses }) => {
	return (
		<div>
			{statuses.map((status, index) => (
				<Status key={index} name={status.name} flagged={status.flagged}/>
			))}
		</div>
	)
};

export default Statuses;