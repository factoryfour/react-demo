import { connect } from 'react-redux';
import { toggleFlag } from '../actions/basic.jsx';
import Patient from '../components/basic.jsx';

const mapStateToProps = (state) => {
	return {
		flagged: state.flagged
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFlagClick: () => {
			dispatch(toggleFlag());
		}
	};
};

const PatientContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Patient);

export default PatientContainer;
