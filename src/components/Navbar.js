import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { CgMenu } from 'react-icons/cg';

import * as styles from './navbar.module.scss';

export default function Navbar() {
	return (
	
			<div className={styles.wrapper}>
				<div>
					<Link className={styles.logo} to="/">
						Logo
					</Link>
				</div>
				<div className={styles.links}>
					<Link className={styles.link} to="/">
						Poznaj przestrzeń
					</Link>
					<Link className={styles.link} to="/offer">
						Oferta
					</Link>
					<Link className={styles.link} to="/location">
						Lokalizacja
					</Link>

					<Link className={styles.link} to="/office">
						Własne biuro
					</Link>
					<Link className={styles.link} to="/contact">
						Kontakt
					</Link>
				</div>
				<div className={styles.socials}>
					<Link className={styles.link} to="/">
						<StaticImage src="../static/facebook.png" alt="facebook" />
					</Link>
					<Link className={styles.link} to="/">
						<StaticImage src="../static/instagram.png" alt="instagram" />
					</Link>
				</div>
				<div>
					<Link className={styles.hamburger} to="/">
						<CgMenu />
					</Link>
				</div>
			</div>

	);
}
