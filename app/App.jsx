import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import { AuthService } from './modules/authentication';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.authService = new AuthService();
	}

	componentDidMount() {
		if (!this.props.isAuthenticated) {
			this.authService.login(this.props.onLoginSuccess);
		}
	}

	componentWillUpdate(nextProps) {
		if (!nextProps.isAuthenticated) {
			this.authService.login(nextProps.onLoginSuccess);
		}
	}

	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>

					<button
						onClick={() => {
							this.props.onLogoutSuccess();
							AuthService.logout();
						}}
					>
						Logout
					</button>
					<hr />

					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

App.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	onLoginSuccess: PropTypes.func.isRequired,
	onLogoutSuccess: PropTypes.func.isRequired
};

export default App;
