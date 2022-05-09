import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './_animatedNextButton.scss';

export default function AnimatedNextButton() {
	return (
		<button className="next">
			<StaticImage src="../static/nextSmall.svg" alt="next" />
		</button>
	);
}
