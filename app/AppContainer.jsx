import React from 'react';
import App from './App.jsx';
import AuthService from './modules/authentication/AuthService';

class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.authService = new AuthService();
		this.onLoginSuccess = (profile) => {
			this.setState({
				isAuthenticated: true,
				profile
			});
		};
		this.onLogoutSuccess = () => {
			this.setState({
				isAuthenticated: false,
				profile: null
			});
		};

		this.state = {
			isAuthenticated: AuthService.loggedIn(),
			profile: AuthService.getProfile()
		};
	}

	componentDidMount() {
		if (!this.state.isAuthenticated) {
			this.authService.login(this.onLoginSuccess);
		}
	}

	componentWillUpdate(nextProps) {
		if (!nextProps.isAuthenticated) {
			this.authService.login(this.onLoginSuccess);
		}
	}

	render() {
		return (
			<App onLogoutSuccess={this.onLogoutSuccess} isAuthenticated={this.state.isAuthenticated} />
		);
	}
}

export default AppContainer;
