import React, { Component } from 'react';
import './header.css';
import {Grid, Row, Col} from 'react-bootstrap';
import MenuItem from './MenuItem';

class Navbar extends Component {

	// Finish off adding menu items and turn.

	render() {
		return (
			<div className="Nav-bar">
					<Col md={12} mdOffset={3}>
						<Col md={2}>
							<MenuItem name={"Physics"} />
						</Col>
						<Col md={2}>
							<MenuItem name={"Potato"} />
						</Col>
						<Col md={2}>
							<MenuItem name={"Salad"} />
						</Col>
					</Col>
			</div>
		);
	};
};

export default Navbar;