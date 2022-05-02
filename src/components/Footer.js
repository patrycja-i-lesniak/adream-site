import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './footer.module.scss';

export default function Footer() {
	return (
		<div className={styles.container}>
			<StaticImage
				className={styles.graphic}
				src="../images/Footer/Group586.png"
				alt="footer graphic"
			/>
			<div className={styles.rightBox}>
				<div>
					<p className={styles.logo}>LOGO</p>
					<p className={styles.paragraph}>
						ul. Towarowa 5/6<br />31-000 Kraków
					</p>
					<p className={`${styles.paragraph} ${styles.bold}`}>
						+48 999 999 999<br />email@email.com
					</p>
				</div>
				<p className={styles.info}>Polityka prywatności</p>
			</div>
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
			<div className={styles.design}>
				<p className={styles.info}>Proudly design by</p>
				<StaticImage className={styles.adreamLogo} src="../images/Footer/logo_adream.svg" alt="adream logo" />
			</div>
		</div>
	);
}
