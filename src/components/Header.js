import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Form from './Form';
import HeroCarousel from './HeroCarousel';

export default function Header() {
	return (
		<div className='header'>
			<div className='wrapper'>
				<h1 className='headerTitle'>Firma</h1>
				<h2 className='h2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
				</h2>
				<StaticImage
					className='progressBar'
					src="../images/Header/progressBar.png"
					alt="progress bar"
				/>
				<HeroCarousel />
				<Form />
			</div>
		</div>
	);
}
