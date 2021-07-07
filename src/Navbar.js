import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './styleCss/Navbar.css';

function Navbar() {
	return (
		<div className='navbar'>
			<h1 className='heading'>ChopFood</h1>
			<ul className='subheading'>
				<li className='home'>Home</li>
				<li className='foodlist'><FontAwesomeIcon icon={faCartPlus} className="icon" /></li>
			</ul>
		</div>
	)
}

export default Navbar

