import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare, } from "@fortawesome/free-brands-svg-icons";
import './styleCss/Footer.css'

function Footer() {
	return (
		<div className='footer'>
		<div>
			<h1 className='footerheading'>ChopFood<span>&copy;</span></h1>
			<div className="connect">
				<p>Connect with us</p>
				<FontAwesomeIcon icon={faFacebookSquare} className="icon facebook" />
				<FontAwesomeIcon icon={faTwitterSquare} className="icon twitter" />
				<FontAwesomeIcon icon={faInstagramSquare} className="icon instagram" />
				<FontAwesomeIcon icon={faYoutubeSquare} className="icon youtube" />
			</div>
			</div>
		</div>
	)
}

export default Footer

