import { connect } from 'react-redux';
import { toggleFlag } from '../actions/basic.jsx';
import Patient from '../components/basic.jsx';

const mapStateToProps = state => ({
	flagged: state.patientApp.flagged
});

const mapDispatchToProps = dispatch => ({
	onFlagClick: () => {
		dispatch(toggleFlag());
	}
});

const PatientContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Patient);

export default PatientContainer;
