import { connect } from 'react-redux';
import App from './App.jsx';
import { loginSuccess, logoutSuccess } from '../utils/auth.actions.jsx';

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.authApp.isAuthenticated
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginSuccess: (profile) => {
			dispatch(loginSuccess(profile));
		},
		onLogoutSuccess: () => {
			dispatch(logoutSuccess());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
