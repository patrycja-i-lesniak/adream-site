import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './footer.module.scss';

export default function Footer() {
	return (
		<div className={styles.container}>
		
			<StaticImage
				className={styles.graphic}
				src="../static/Footer/Group 586@2x.png"
				alt="graphic"
			/>
				<div>
					<p className={styles.logo}>logo</p>
					<p className={styles.paragraph}>
						ul. Towarowa 5/6<br />31-000 Kraków
					</p>
					<p className={styles.paragraphBold}>
						+48 999 999 999<br />email@email.com
					</p>
				</div>
				<p className={styles.policy}>Polityka prywatności</p>
			<div className={styles.footerNavigation}>
				<div className={styles.nav}>
					<Link className={styles.link} to="/">
						Strona główna
					</Link>
					<Link className={styles.link} to="/space">
						Poznaj przestrzeń
					</Link>
					<Link className={styles.link} to="/offer">
						Oferta
					</Link>
				</div>
				<div className={styles.nav}>
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
				<p className={styles.info}>Proudly designed by</p>
				<StaticImage
					className={styles.aDreamLogo}
					src="../static/Footer/logo_adream@2x.png"
					alt="logo"
				/>
		</div>
	);
}
