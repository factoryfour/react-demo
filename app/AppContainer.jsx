import { connect } from 'react-redux';
import App from './App.jsx';
import { actions } from './modules/authentication';

const mapStateToProps = state => ({
	isAuthenticated: state.authApp.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
	onLoginSuccess: (profile) => {
		dispatch(actions.loginSuccess(profile));
	},
	onLogoutSuccess: () => {
		dispatch(actions.logoutSuccess());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
