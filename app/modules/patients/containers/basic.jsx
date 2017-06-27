import { connect } from 'react-redux';
import { toggleFlag, fetchData } from '../actions/basic.jsx';
import Patient from '../components/basic.jsx';

const mapStateToProps = state => ({
	flagged: state.patientApp.flagged,
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
