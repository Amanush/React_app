import React, { Component } from 'react';
import './header.css';
import MenuItem from './MenuItem';

class HeaderMenu extends Component {

	// Finish off adding menu items and turn.

	render() {
		return (
			<div className="HeaderMenu">
				<MenuItem name={"hello"}/>
			</div>
		);
	};
};

export default HeaderMenu;