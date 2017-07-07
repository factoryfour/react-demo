import { connect } from 'react-redux';
import PatientList from '../components/PatientList.jsx';
import { selectPatient } from '../actions';

const mapStateToProps = state => {
	return {
		patients: state.patients
	};
};


const mapDispatchToProps = (dispatch) => {
	return {
		onPatientClick: (id) => {
			console.log(id);
			dispatch(selectPatient(id));
		}
	};
};

const PatientListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PatientList);

export default PatientListContainer;
