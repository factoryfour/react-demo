import { connect } from 'react-redux';
import { actions } from '../node_modules/@factoryfour/react-authentication';
import App from './App.jsx';

const mapStateToProps = state => ({
	isAuthenticated: state.authApp.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
	onLogin: (profile, token) => {
		dispatch(actions.login(profile, token));
	},
	onLogout: () => {
		dispatch(actions.logout());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
