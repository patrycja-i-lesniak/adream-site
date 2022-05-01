import React from 'react';
import { Carousel } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as styles from './heroSlider.module.css';

export default function HeroSlider() {
	return (
		<div className={styles.container}>
			<Carousel fade>
				<Carousel.Item>
					<StaticImage
						className="d-block w-100"
						src="../images/Header/shutterstock_615439679.png"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<StaticImage
						className="d-block w-100"
						src="../images/Header/shutterstock_1090078049.png"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<StaticImage
						className="d-block w-100"
						src="../images/Header/shutterstock_615439679.png"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
