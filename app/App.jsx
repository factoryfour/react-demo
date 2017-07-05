import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import AuthService from './modules/authentication/AuthService';

const App = ({ isAuthenticated, onLogoutSuccess }) => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>

			<button
				onClick={() => {
					onLogoutSuccess();
					AuthService.logout();
				}}
			>
				Logout
			</button>
			<hr />

			<Route
				exact path="/"
				render={() => (
					<Home isAuthenticated={isAuthenticated} />
				)}
			/>
			<Route path="/about" component={About} />
		</div>
	</Router>
);

App.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	onLogoutSuccess: PropTypes.func.isRequired
};

export default App;
