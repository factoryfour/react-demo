import React from 'react';
import { connect } from 'react-redux';
import App from './App.jsx';

class AppContainer extends React.Component {
	componentDidMount() {

	}

	render() {
		return <App />;
	}
}

export default connect()(AppContainer);
