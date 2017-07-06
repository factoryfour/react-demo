import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from './routes/About.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Patients from './routes/Patients.jsx';

const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
        <li><Link to="/patients">Patients</Link></li>
			</ul>

			<hr />

			<Route exact path="/" component={Dashboard} />
			<Route path="/about" component={About} />
      <Route path="/patients" component={Patients} />
		</div>
	</Router>
);

export default App;
