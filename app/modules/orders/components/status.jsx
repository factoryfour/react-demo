import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flagged: true,
			name: "DefaultStatus",
			onClick: () => {
				this.setState(prevState => ({
					flagged: !prevState.flagged
				}));
			}
		}
	}

	render() {
		return (
			<div>
				<div> {String(this.state.flagged)} </div>
				<button onClick={this.state.onClick}> {this.props.name} </button>
			</div>
		);
	}
}

Status.propTypes = {
	flagged: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired
}

export default Status;