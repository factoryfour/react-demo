import React from 'react';
import PropTypes from 'prop-types';

const Patient = ({ flagged, loading, onFlagClick, status }) => (
	<div>
		<div>
			Loading: {String(loading)}
		</div>
		<div>
			Status:
			<pre>
				{JSON.stringify(status, null, 2)}
			</pre>
		</div>
		<div>
			Flagged: {String(flagged)}
		</div>
		<button onClick={() => onFlagClick()}>Toggle Flag</button>
	</div>
);

// class Patient extends React.Component {
// 	componentDidMount() {
// 		if (this.props.isAuthenticated) {
// 			this.props.loadData();
// 		}
// 	}
//
// 	componentWillReceiveProps(nextProps) {
// 		if (nextProps.isAuthenticated && !this.props.isAuthenticated) {
// 			this.props.loadData();
// 		}
// 	}
//
// 	render() {
// 		return (
//
// 		);
// 	}
// }

Patient.propTypes = {
	flagged: PropTypes.bool.isRequired,
	// isAuthenticated: PropTypes.bool.isRequired,
	// loadData: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	onFlagClick: PropTypes.func.isRequired,
	status: PropTypes.shape({
		hostname: PropTypes.string,
		message: PropTypes.string,
		success: PropTypes.bool,
		time: PropTypes.number
	}).isRequired
};

export default Patient;
