import React from 'react';

import Form from './Form';
import Carousel from './Carousel';

export default function Header() {
	return (
		<div className="header">
			<div className="header__wrapper">
				<Carousel />
				<div className="header__textbox">
					<h1 className="header__text-h1">Firma</h1>
					<h2 className="header__text-h2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
					</h2>
				</div>

				<Form />
			</div>
		</div>
	);
}
