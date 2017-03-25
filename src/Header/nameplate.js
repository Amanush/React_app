import React, { Component } from 'react';
import './header.css';
import { Row, Col } from 'react-bootstrap';

class Nameplate extends Component {

	render() {
		return (
			<div className="nameplate">
				<Col md={8}>
					<Row>
						<Col md={8} mdOffset ={3}>
							<h1> Michael Kewming </h1>
						</Col>				
					</Row>
					<Row>
						<Col md={6} mdOffset ={3}>
							<h2> (Physicist in production) </h2>
						</Col>
					</Row>
				</Col>
			</div>
		);
	};
};

export default Nameplate;