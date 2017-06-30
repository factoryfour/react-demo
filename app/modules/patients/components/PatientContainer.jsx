import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Patient from './Patient.jsx';

class PatientContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flagged: false,
			loading: false,
			onFlagClick: () => {
				this.state.flagged = !this.state.flagged;
			},
			status: {}
		};
	}

	componentDidMount() {
		if (this.props.isAuthenticated) {
			this.loadData();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isAuthenticated && !this.props.isAuthenticated) {
			this.loadData();
		}
	}

	loadData() {
		this.state.loading = true;

		axios.get('https://api-dev.factoryfour.com/patients/health/status')
			.then((response) => {
				this.state.status = response.data;
				this.status.loading = false;
			}, (error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<Patient
				flagged={this.state.flagged}
				loading={this.state.loading}
				onFlagClick={this.state.onFlagClick}
				status={this.state.status}
			/>
		);
	}
}

PatientContainer.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
};

// const mapStateToProps = state => ({
// 	flagged: state.patientApp.flagged,
// 	isAuthenticated: state.authApp.isAuthenticated,
// 	loading: state.patientApp.loading,
// 	status: state.patientApp.status
// });
//
// const mapDispatchToProps = dispatch => ({
// 	onFlagClick: () => {
// 		dispatch(toggleFlag());
// 	},
// 	loadData: () => {
// 		dispatch(fetchData());
// 	}
// });
//
// const PatientContainer = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Patient);

export default PatientContainer;
