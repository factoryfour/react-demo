import React from 'react';
import { connect } from 'react-redux';
import App from './App.jsx';
import AuthService from '../utils/AuthService.js';

class AppContainer extends React.Component {
	componentDidMount() {
		const authService = new AuthService();
		authService.login();
	}

	render() {
		return <App />;
	}
}

export default AppContainer;
// export default connect()(AppContainer);
