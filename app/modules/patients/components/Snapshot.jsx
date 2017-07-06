import React, { Component } from 'react';

/*
class Snapshot extends Component {

	render() {
		const divstyle = {
			border:'1px solid red',
			width: 300
		};
		return (<div
  style={divstyle}
		>
			<h1>Snapshot!</h1>
		</div>
		);
	}
}
*/

const Snapshot = () => {
	const divstyle = {
		border:'1px solid red',
		height: 500,
		margin: 0
	};
	return (<div
  style={divstyle}
	>
		<h1><center>Snapshot!</center></h1>
	</div>
	);
};
export default Snapshot;
