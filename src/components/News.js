import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function News() {
	return (
		<div className='newsContainer'>
			<h1 className='title'>Aktualności</h1>

			<div className='newsWrapper'>
				<div className='box'>
					<StaticImage
						className='photo'
						src="../images/News/shutterstock_1433594243.png"
						alt="photo1"
					/>
					<p className='paragraph'> 01.01.2021</p>
					<h3 className='h3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className='link' to="/">
						Więcej
					</p>
				</div>

				<div className='box'>
					<StaticImage
						className='photo'
						src="../images/News/shutterstock_1575692173.png"
						alt="photo1"
					/>
					<p className='paragraph'>01.01.2021</p>
					<h3 className='h3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className='link' to="/">
						Więcej
					</p>
				</div>

				<div className='box'>
					<StaticImage
						className='photo'
						src="../images/News/shutterstock_763511722.png"
						alt="photo1"
					/>
					<p className='paragraph'>01.01.2021</p>
					<h3 className='h3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className='link' to="/">
						Więcej
					</p>
				</div>
			</div>
		</div>
	);
}
