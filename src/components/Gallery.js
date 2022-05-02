import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './gallery.module.scss';

export default function Gallery() {
	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Gallery</h1>
			<div className={styles.line} />
			<StaticImage
				className={styles.image1}
				src="../images/Gallery/Component 16 – 1.png"
				alt="photo 1"
			/>
			<StaticImage
				className={styles.image2}
				src="../images/Gallery/shutterstock_579651031.png"
				alt="photo 2"
			/>

			<StaticImage
				className={styles.image3}
				src="../images/Gallery/shutterstock_1187833249.png"
				alt="photo 3"
			/>

			<StaticImage
				className={styles.image4}
				src="../images/Gallery/shutterstock_763511722.png"
				alt="photo 4"
			/>
			<button className={styles.prev}>
				<StaticImage className={styles.arrow} src="../static/prev.svg" alt="prev" />
			</button>
			<button className={styles.next}>
				{' '}
				<StaticImage className={styles.arrow} src="../static/next.svg" alt="next" />
			</button>
		</div>
	);
}
