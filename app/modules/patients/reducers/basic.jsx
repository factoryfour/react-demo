import { combineReducers } from 'redux';
import { TOGGLE_FLAG, REQUEST_DATA, RECEIVE_DATA } from '../actions/basic.jsx';

function flagged(state = false, action) {
	switch (action.type) {
	case TOGGLE_FLAG:
		return !state;
	default:
		return state;
	}
}

function status(state = {}, action) {
	switch (action.type) {
	case RECEIVE_DATA:
		return action.status;
	default:
		return state;
	}
}

function loading(state = false, action) {
	switch (action.type) {
	case REQUEST_DATA:
		return true;
	case RECEIVE_DATA:
		return false;
	default:
		return state;
	}
}

export default combineReducers({
	flagged,
	status,
	loading
});
