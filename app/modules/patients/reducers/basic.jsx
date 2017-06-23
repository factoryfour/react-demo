import { TOGGLE_FLAG } from '../actions/basic.jsx';
// import { combineReducers } from 'redux';

function flag(state = false, action) {
	switch (action.type) {
	case TOGGLE_FLAG:
		return !state;
	default:
		return state;
	}
}

function patientApp(state = {}, action) {
	console.log('patientApp');
	return {
		flagged: flag(state.flagged, action)
	};
}

export default patientApp;
