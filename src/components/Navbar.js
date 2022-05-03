import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './navbar.module.scss';

export default function Navbar() {
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.links}>
					<Link className={styles.link} to="/space">
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
			</div>
			<div className={styles.socials}>
				<StaticImage
					className={styles.facebook}
					src="../static/facebook.svg"
					alt="facebook"
				/>
				<StaticImage
					className={styles.instagram}
					src="../static/instagram.svg"
					alt="instagram"
				/>
			</div>
		</div>
	);
}
