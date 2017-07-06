import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: "Search"
		};
	}

	filterChange(filterText) {
		// this.props.onFilterChange(
		// 	this.setState(() => {

		// 	})
		// )
	}

	render() {
		return (
			<form>
				<input 
					type="text"
					placeholder="Type search words"
					value={this.props.filterText}
					onChange={this.filterChange}
				/>
			</form>
		)
	}
}

SearchBar.propTypes = {
	filterText: PropTypes.string
}

export default SearchBar;