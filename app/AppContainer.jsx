import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App.jsx';
import AuthService from '../utils/AuthService.js';
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

class AppContainer extends React.Component {
	static loginProcess(loginCallback) {
		const authService = new AuthService();

		authService.login();

		authService.lock.on('authenticated', (authResult) => {
			authService.lock.getProfile(authResult.idToken, (error, profile) => {
				if (error) {
					console.error(error);
				}

				AuthService.setToken(authResult.idToken);
				AuthService.setProfile(profile);
				loginCallback(profile);
				authService.lock.hide();
			});
		});
	}

	componentDidMount() {
		if (!AuthService.loggedIn()) {
			AppContainer.loginProcess(this.props.onLoginSuccess);
		}
	}

	componentWillUpdate(nextProps) {
		if (!nextProps.isAuthenticated) {
			AppContainer.loginProcess(nextProps.onLoginSuccess);
		}
	}

	render() {
		return <App onLogout={this.props.onLogoutSuccess} />;
	}
}
AppContainer.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	onLoginSuccess: PropTypes.func.isRequired,
	onLogoutSuccess: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);
