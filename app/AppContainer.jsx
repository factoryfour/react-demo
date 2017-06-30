import React from 'react';
import App from './App.jsx';
import AuthService from '../utils/AuthService';

class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.authService = new AuthService();
		this.state = {
			isAuthenticated: AuthService.loggedIn(),
			onLoginSuccess: (profile) => {
				this.state.profile = profile;
			},
			onLogoutSuccess: () => {
				this.state.isAuthenticated = false;
				this.state.profile = null;
			},
			profile: AuthService.getProfile()
		};
	}

	componentDidMount() {
		if (!this.state.isAuthenticated) {
			this.authService.login(this.state.onLoginSuccess);
		}
	}

	componentWillUpdate(nextProps) {
		if (!nextProps.isAuthenticated) {
			this.authService.login(nextProps.onLoginSuccess);
		}
	}

	render() {
		return <App onLogoutSuccess={this.state.onLogoutSuccess} />;
	}
}

// const mapStateToProps = state => ({
// 	isAuthenticated: state.authApp.isAuthenticated
// });
//
// const mapDispatchToProps = dispatch => ({
// 	onLoginSuccess: (profile) => {
// 		dispatch(loginSuccess(profile));
// 	},
// 	onLogoutSuccess: () => {
// 		dispatch(logoutSuccess());
// 	}
// });

export default AppContainer;
