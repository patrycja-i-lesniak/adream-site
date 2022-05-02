import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './office.module.scss';

export default function Office() {
	return (
		<div className={styles.container}>
				<h1 className={styles.h1}>Lorem ipsum vs własne biuro</h1>
				<StaticImage
					className={styles.image}
					src="../images/Office/Group 258.png"
					alt="icon"
				/>
				<StaticImage
					className={styles.graphic}
					src="../images/Office/Group 576.svg"
					alt="icon"
				/>
				<div className={styles.line} />
		</div>
	);
}