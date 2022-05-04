import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './animatedNextButton.module.scss'

export default function AnimatedNextButton() {
	return (
		<button className={styles.next}>
			<StaticImage className={styles.svg} src="../static/nextSmall.svg" alt="next" />
		</button>
	);
}
