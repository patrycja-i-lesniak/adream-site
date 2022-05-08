import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './header.module.scss';
import ContactForm from './ContactForm';
import HeroCarousel from './HeroCarousel';

export default function Header() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.h1}>Firma</h1>
				<h2 className={styles.h2}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
				</h2>
				<StaticImage
					className={styles.progressBar}
					src="../images/Header/progressBar.png"
					alt="progress bar"
				/>
				<HeroCarousel />
				<ContactForm />
			</div>
		</div>
	);
}
