import React, { Component } from 'react';
import './header.css';
import { Col } from 'react-bootstrap';

class MenuItem extends Component {

	render() {
		return (
			<h3>{this.props.name}</h3>
		);
	};
};

export default MenuItem;