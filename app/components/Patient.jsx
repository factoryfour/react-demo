import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
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
*/

const Patient = ({ firstName, lastName, DOB, onClick }) => (
	<tr
  onClick={onClick}
	>
		<td>{lastName}</td>
		<td>{firstName}</td>
		<td>{DOB}</td>
	</tr>
)

Patient.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	DOB: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Patient;
