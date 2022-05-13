import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Form from './Form';
import Carousel from './Carousel';

export default function Header() {
	return (
		<div className="header">
			<div className="header-wrapper">
				<StaticImage
					className="header-progress-bar"
					src="../images/Header/progressBar.png"
					alt="progress bar"
				/>
				<Carousel />
				<div className="header-text-wrapper">
					<h1 className="header-text-h1">Firma</h1>
					<h2 className="header-text-h2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
					</h2>
				</div>

				<Form />
			</div>
		</div>
	);
}
