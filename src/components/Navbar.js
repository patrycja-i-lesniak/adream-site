import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { CgMenu } from 'react-icons/cg';

export default function Navbar() {
	return (
		<div className="navbar__container">
			<div className="navbar__logo">
				<h2 as={Link} className="navbar__logo-h2" to="/">
					Logo
				</h2>
			</div>
			<div className="navbar__links">
				<Link className="navbar__link" to="/">
					Poznaj przestrzeń
				</Link>

				<Link className="navbar__link" to="/offer">
					Oferta
				</Link>
				<Link className="navbar__link" to="/location">
					Lokalizacja
				</Link>

				<Link className="navbar__link break" to="/office">
					Własne biuro
				</Link>
				<Link className="navbar__link break" to="/contact">
					Kontakt
				</Link>
			</div>
			<div className="navbar__socials">
				<Link className="navbar__link" to="/">
					<StaticImage className='navbar__icon' src="../static/facebook.png" alt="facebook" />
				</Link>
				<Link className="navbar__link" to="/">
					<StaticImage className='navbar__icon' src="../static/instagram.png" alt="instagram" />
				</Link>
			</div>
			<div>
				<Link className="navbar__hamburger" to="/">
					<CgMenu />
				</Link>
			</div>
		</div>
	);
}
