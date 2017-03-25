import React, { Component } from 'react';
import './header.css';
import { Col } from 'react-bootstrap';

class MenuItem extends Component {

	render() {
		return (
			<p>{this.props.name}</p>
		);
	};
};

export default MenuItem;