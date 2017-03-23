import React, { Component } from 'react';

class MenuItem extends Component {

	render() {
		return (
			<div className="MenuItem">
				<p>{this.props.name}</p>
			</div>
		);
	};
};

export default MenuItem;