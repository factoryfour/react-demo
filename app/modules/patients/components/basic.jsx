import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toggleFlag } from '../actions/basic.jsx';

class Patient extends Component {
	constructor(props) {
		super(props);
		this.state = {
			last: 'Singh',
			flagged: false
		};
		this.click = this.click.bind(this);
	}


	click() {
		console.log('hello');
	}

	render() {
		return (
			<p>
				This is a Patient: {this.props.name} {this.state.last}
				<button onClick={this.click}>Toggle Flag</button>
			</p>
		);
	}
}

Patient.propTypes = {
	name: PropTypes.string.isRequired
};

export default Patient;
