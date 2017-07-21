import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '@factoryfour/react-authentication';
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import config from './config';
console.log(React);
const Authentication = Auth.Authentication;
const AuthService = Auth.AuthService;

const App = ({ isAuthenticated, onLogin, onLogout }) => (
	<Authentication config={config} isAuthenticated={isAuthenticated} onLogin={onLogin}>
		<Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>

				<button onClick={() => { AuthService.logout(onLogout); }}>
					Logout
				</button>
				<hr />

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	</Authentication>
);

App.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	onLogin: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired
};

export default App;
