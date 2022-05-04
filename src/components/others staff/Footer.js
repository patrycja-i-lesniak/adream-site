import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<StaticImage src="../images/Logo/Logo.png" alt="logo" />
			</div>

			<div className={styles.address}>
				<p className={styles.text1}>
					ul. Towarowa 5/6 <br />31-000 Kraków
				</p>
				<p className={styles.text2}>
					+48 999 999 999 <br />email@email.com
				</p>
			</div>
			<div>
				<ul className={styles.ul1}>
					<li className={styles.li}>
						<Link className={styles.link}>Strona główna</Link>
					</li>
					<li className={styles.li}>
						<Link className={styles.link}>Poznaj przestrzeń</Link>
					</li>
					<li className={styles.li}>
						<Link className={styles.link}>Oferta</Link>
					</li>
				</ul>
				<ul className={styles.ul2}>
					<li className={styles.li}>
						<Link className={styles.link}>Lokalizacja</Link>
					</li>
					<li className={styles.li}>
						<Link className={styles.link}>Własne biuro</Link>
					</li>
					<li className={styles.li}>
						<Link className={styles.link}>Kontakt</Link>
					</li>
				</ul>
			</div>
			<StaticImage
				className={styles.graphic}
				src="../images/Footer/Group586.png"
				alt="graphic"
				width={290}
				height={68.23}
			/>
			<p className={styles.policy}>Polityka prywatności</p>
			<p className={styles.design}>Proudly designed by</p>
			<StaticImage
				className={styles.logodesign}
				src="../images/Footer/logo_adream.svg"
				alt="logo adream"
			/>
		</div>
	);
};

export default Footer;
