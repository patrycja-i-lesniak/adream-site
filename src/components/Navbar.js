import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { CgMenu } from 'react-icons/cg';

export default function Navbar() {
	return (
		<div className="navbarWrapper">
			<div className='logoWrapper'>
				<Link className="logo" to="/">
					Logo
				</Link>
			</div>
			<div className="links">
				<Link className="link" to="/">
					Poznaj przestrzeń
				</Link>
				<Link className="link" to="/offer">
					Oferta
				</Link>
				<Link className="link" to="/location">
					Lokalizacja
				</Link>

				<Link className="link" to="/office">
					Własne biuro
				</Link>
				<Link className="link" to="/contact">
					Kontakt
				</Link>
			</div>
			<div className="socials">
				<Link className="link" to="/">
					<StaticImage src="../static/facebook.png" alt="facebook" />
				</Link>
				<Link className="link" to="/">
					<StaticImage src="../static/instagram.png" alt="instagram" />
				</Link>
			</div>
			<div>
				<Link className="hamburger" to="/">
					<CgMenu />
				</Link>
			</div>
		</div>
	);
}
