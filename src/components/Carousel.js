import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { StaticImage } from 'gatsby-plugin-image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function Carousel() {

	return (
		<CarouselProvider
			className="carousel-wrapper"
			naturalSlideWidth={1920}
			naturalSlideHeight={941}
			totalSlides={3}
			infinite
			interval={10000}
			isPlaying={true}
		>
			<Slider className="carousel-slider" classNameAnimation="fade-animation">
				<Slide classNameHidden="hide" classNameVisible="show" index={0}>
					<StaticImage
						className="carousel-image"
						src='../images/Carousel/slide1.webp'
						alt="This is the first Image"
					/>
				</Slide>

				<Slide classNameHidden="hide" classNameVisible="show" index={1}>
					<StaticImage
						className="carousel-image"
						src='../images/Carousel/slide2.webp'
						alt="This is the second Image"
					/>
				</Slide>
				<Slide classNameHidden="hide" classNameVisible="show" index={2}>
					<StaticImage
						className="carousel-image"
						src='../images/Carousel/slide3.webp'
						alt="This is the third Image"
					/>
				</Slide>
			</Slider>
			<ButtonBack className="carousel-back-button" aria-label="Right left">
				<span>
					<FiArrowLeft className="carousel-arrow-left" />
				</span>
			</ButtonBack>
			<ButtonNext className="carousel-next-button" aria-label="Right right">
				<span>
					<FiArrowRight className="carousel-arrow-right" />
				</span>
			</ButtonNext>
			{/* <div className="progress-bar-container">
				<div className="progress-bar-item">
					<h3>Slide 1</h3>
					<span data-slick-index="0" className="progress-bar" />
				</div>
			</div> */}
		</CarouselProvider>
	);
}
