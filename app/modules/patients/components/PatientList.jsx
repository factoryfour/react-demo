import React, { Component } from 'react';
import Patient from './basic.jsx';

/* For when we need state-based component here
class PatientList extends Component {

	render() {
		const divstyle = {
			border: '1px solid blue',
			width: 500
		};

		return (<ul
  style={divstyle}>
			<li><Patient name="Nikita" /></li>
			<li><Patient name="John" /></li>
		</ul>);
	}
}
*/

const PatientList = function () {
	const divstyle = {
		border: '1px solid blue',
		height: 500,
		margin: 0
	};
	return (<div className="col-xs-8">
		<ul
  style={divstyle}
		>
			<h1><center>Patient List</center></h1>
			<li><Patient name="Nikita" /></li>
			<li><Patient name="John" /></li>
		</ul>
	</div>
	);
};

export default PatientList;
