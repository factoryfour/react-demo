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
			status: {}
		};

		this.onFlagClick = () => {
			this.setState(prevState => ({
				flagged: !prevState.flagged
			}));
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
		this.setState({
			loading: true
		});

		axios.get('https://api-dev.factoryfour.com/patients/health/status')
			.then((response) => {
				this.setState({
					loading: false,
					status: response.data
				});
			}, (error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<Patient
				flagged={this.state.flagged}
				loading={this.state.loading}
				onFlagClick={this.onFlagClick}
				status={this.state.status}
			/>
		);
	}
}

PatientContainer.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
};

export default PatientContainer;
