import { connect } from 'react-redux';
import { toggleFlag, fetchData } from '../actions';
import Patient from './Patient';

const mapStateToProps = state => ({
	flagged: state.patientApp.flagged,
	isAuthenticated: state.authApp.isAuthenticated,
	loading: state.patientApp.loading,
	status: state.patientApp.status
});

const mapDispatchToProps = dispatch => ({
	onFlagClick: () => {
		dispatch(toggleFlag());
	},
	loadData: () => {
		dispatch(fetchData());
	}
});

const PatientContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Patient);

export default PatientContainer;