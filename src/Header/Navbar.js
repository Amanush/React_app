import React, { Component } from 'react';
import './header.css';
import {Grid, Row, Col} from 'react-bootstrap';
// import MenuItem from './MenuItem';

class Navbar extends Component {

	// Finish off adding menu items and turn.

	render() {
		return (
			<div className="Nav-bar">
				<Grid fluid={true}>
					<Row>
					<Col md={12}>
						<Col md={4}>
							derp
						</Col>
						<Col md={4}>
							derp
						</Col>
						<Col md={4}>
							derp
						</Col>
					</Col>
					</Row>
				</Grid>	
			</div>
		);
	};
};

export default Navbar;