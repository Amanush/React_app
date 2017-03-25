import React, { Component } from 'react';

// Components for Header
import Nameplate from './Header/nameplate';
import HeaderAnimation from './Header/HeaderAnimation';
import Navbar from './Header/Navbar';

class Header extends Component {

	render() {
		return (
			<div className="App-header">
				<HeaderAnimation/>
				<Nameplate />
				<Navbar/>
			</div>
		);
	};
};

export default Header;