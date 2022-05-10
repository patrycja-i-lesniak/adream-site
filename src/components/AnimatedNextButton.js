import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import '../styles/_animatedNextButton.scss';

export default function AnimatedNextButton() {
	return (
		<button className="animated-btn">
			<StaticImage src="../static/nextSmall.svg" alt="next" />
		</button>
	);
}
