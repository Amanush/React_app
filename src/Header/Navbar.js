import React, { Component } from 'react';
import './header.css';
import {Grid, Row, Col} from 'react-bootstrap';
import MenuItem from './MenuItem';

class Navbar extends Component {

	// Finish off adding menu items and turn.

	render() {
		return (
			<div className="Nav-bar">
				<Row>
					<div className="Physics">
						<Col md={3}>
							<MenuItem name={'Physics'}/>
						</Col>
					</div>
					<div className="Salad">
						<Col md={3}>
							<MenuItem name={'Salad'}/>
						</Col>
					</div>
					<div className="Archive">
						<Col md={3}>
							<MenuItem name={'Archive'}/>
						</Col>
					</div>
				</Row>
			</div>
		);
	};
};

export default Navbar;