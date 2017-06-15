import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Patient extends Component {
	constructor(props) {
		super(props);
		this.state = {
			last: 'Singh',
			flagged: false
		};
	}

	render() {
		return <h1> This is a Patient: {this.props.name} {this.state.last}</h1>;
	}
}

Patient.propTypes = {
	name: PropTypes.string.isRequired
};

export default Patient;
