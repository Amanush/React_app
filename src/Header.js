import React, { Component } from 'react';

// Components for Header
import Heading from './Header/title';
import HeaderAnimation from './Header/HeaderAnimation';
import HeaderMenu from './Header/HeaderMenu';

class Header extends Component {

	render() {
		return (
			<div className="App-header">
				<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet"/>
				<HeaderAnimation/>
				<Heading/>
				<HeaderMenu/>
			</div>
		);
	};
};

export default Header;