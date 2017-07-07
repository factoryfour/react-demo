import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Patient extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: props.firstName,
			lastName: props.lastName,
			DOB: props.DOB
		};
	}


	render() {
		return (<tr role="option" onClick={this.props.onClick}>
			<td>{this.state.lastName}</td>
			<td>{this.state.firstName}</td>
			<td>{this.state.DOB}</td>
		</tr>
		);
	}
}

Patient.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	DOB: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Patient;

/*
const Patient = ({ firstName, lastName, DOB, onClick }) => (
	<tr
  onClick={onClick}
	>
		<td>{lastName}</td>
		<td>{firstName}</td>
		<td>{DOB}</td>
	</tr>
)
*/
