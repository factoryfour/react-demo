import React from 'react';
import App from './App.jsx';
import AuthService from '../utils/AuthService';

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
			<App
				onLogoutSuccess={this.onLogoutSuccess}
				isAuthenticated={this.state.isAuthenticated}
			/>
		);
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
