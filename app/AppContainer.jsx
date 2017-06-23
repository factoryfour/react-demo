import React from 'react';
import { connect } from 'react-redux';
import App from './App.jsx';
import AuthService from '../utils/AuthService.js';
import { loginSuccess } from '../utils/auth.actions.jsx';
import PropTypes from 'prop-types';

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginSuccess: (profile) => {
			dispatch(loginSuccess(profile));
		}
	};
};

class AppContainer extends React.Component {
	componentDidMount() {
		const authService = new AuthService();

		if (!AuthService.loggedIn()) {
			authService.login();

			authService.lock.on('authenticated', (authResult) => {
				authService.lock.getProfile(authResult.idToken, (error, profile) => {
					if (error) {
						console.error(error);
					}

					AuthService.setToken(authResult.idToken);
					AuthService.setProfile(profile);
					this.props.onLoginSuccess(profile);
					authService.lock.hide();
				});
			});
		}
	}

	render() {
		return <App />;
	}
}
AppContainer.propTypes = {
	onLoginSuccess: PropTypes.func.isRequired
};

export default connect(
	null,
	mapDispatchToProps
)(AppContainer);
