import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './header.module.css';
import HeroSlider from './HeroSlider';

export default function Header() {
	return (
		<header className={styles.container}>
			<div className={styles.container}>
				<StaticImage className={styles.image} src="../images/Logo/Logo@2x.png" alt="logo" />
				<h1 className={styles.h1}>Firma</h1>
				<h2 className={styles.h2}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
				</h2>
				<HeroSlider />
			</div>
		</header>
	);
}
