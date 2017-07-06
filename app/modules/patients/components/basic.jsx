import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Patient extends Component {
	constructor(props) {
		super(props);
		this.state = {
			last: 'Singh'
		};
	}


	render() {
		return (<div>
			<h3> This is a Patient: {this.props.name} {this.state.last}</h3>
		</div>
		);
	}
}

Patient.propTypes = {
	name: PropTypes.string.isRequired
};

export default Patient;
