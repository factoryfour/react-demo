import { connect } from 'react-redux';
import { login, logout } from './modules/authentication/actions.js';
import App from './App.jsx';

const mapStateToProps = state => ({
	isAuthenticated: state.authApp.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
	onLogin: (profile, token) => {
		dispatch(login(profile, token));
	},
	onLogout: () => {
		dispatch(logout());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
