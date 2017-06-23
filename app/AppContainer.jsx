import React from 'react';
import { connect } from 'react-redux';
import App from './App.jsx';
import AuthService from '../utils/AuthService.js';
import { loginSuccess } from '../utils/auth.actions.jsx';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';


const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.authApp.isAuthenticated,
		profile: state.authApp.profile,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginSuccess: (profile) => {
			dispatch(loginSuccess(profile));
		}
	}
};

class AppContainer extends React.Component {
	componentDidMount() {
		console.log(this.props);

		if (!this.props.isAuthenticated) {
		// if (!this.props.profile) {
			console.log(this.props.isAuthenticated);
			const authService = new AuthService();
			authService.login();

			authService.lock.on('authenticated', (authResult) => {
				authService.lock.getProfile(authResult.idToken, (error, profile) => {
					if (error) {
						console.log(error);
					}

					authResult.profile = profile;
					authResult.authHeader = `Bearer ${authResult.idToken}`;
					console.log(authResult);

					this.props.onLoginSuccess(authResult.profile);
					authService.lock.hide();
					// return this.props.history.push({ pathname: '/' });
				})
			});
		}

	}

	render() {
		return <App />;
	}
}
AppContainer.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	onLoginSuccess: PropTypes.func.isRequired
};
// export default AppContainer;
// export default withRouter(connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(AppContainer));
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);
