import { combineReducers } from 'redux';
import { AuthService } from '@factoryfour/react-authentication';
import { LOGIN, LOGOUT } from './actions';

function isAuthenticated(state = AuthService.loggedIn(), action) {
	switch (action.type) {
		case LOGIN:
			return true;
		case LOGOUT:
			return false;
		default:
			return state;
	}
}

function profile(state = AuthService.getProfile(), action) {
	switch (action.type) {
		case LOGIN:
			return action.profile;
		case LOGOUT:
			return {};
		default:
			return state;
	}
}

function token(state = AuthService.getToken(), action) {
	switch (action.type) {
		case LOGIN:
			return action.token;
		case LOGOUT:
			return null;
		default:
			return state;
	}
}

export default combineReducers({
	isAuthenticated,
	profile,
	token
});
