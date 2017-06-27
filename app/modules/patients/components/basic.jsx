import React from 'react';
import PropTypes from 'prop-types';

class Patient extends React.Component {
	componentDidMount() {
		if (this.props.isAuthenticated) {
			this.props.loadData();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isAuthenticated && !this.props.isAuthenticated) {
			this.props.loadData();
		}
	}

	render() {
		return (
			<div>
				<div>
					Loading: {String(this.props.loading)}
				</div>
				<div>
					Status: {JSON.stringify(this.props.status)}
				</div>
				<div>
					Flagged: {String(this.props.flagged)}
				</div>
				<button onClick={() => this.props.onFlagClick()}>Toggle Flag</button>
			</div>
		);
	}
}

Patient.propTypes = {
	flagged: PropTypes.bool.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	loadData: PropTypes.func.isRequired,
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
