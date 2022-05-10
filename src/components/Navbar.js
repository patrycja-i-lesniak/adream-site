import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { CgMenu } from 'react-icons/cg';

export default function Navbar() {
	return (
		<div className="navbar-container">
			<div className='navbar-logo'>
				<Link className="navbar-logo-image" to="/">
					Logo
				</Link>
			</div>
			<div className="navbar-links">
				<Link className='navbar-link' to="/">
					Poznaj przestrzeń
				</Link>
				<Link className='navbar-link' to="/offer">
					Oferta
				</Link>
				<Link className='navbar-link' to="/location">
					Lokalizacja
				</Link>

				<Link className='navbar-link' to="/office">
					Własne biuro
				</Link>
				<Link className='navbar-link' to="/contact">
					Kontakt
				</Link>
			</div>
			<div className="navbar-socials">
				<Link className='navbar-link' to="/">
					<StaticImage src="../static/facebook.png" alt="facebook" />
				</Link>
				<Link className='navbar-link' to="/">
					<StaticImage src="../static/instagram.png" alt="instagram" />
				</Link>
			</div>
			<div>
				<Link className="navbar-hamburger" to="/">
					<CgMenu />
				</Link>
			</div>
		</div>
	);
}
