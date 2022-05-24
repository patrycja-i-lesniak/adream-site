import React, { useRef, useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { StaticImage } from 'gatsby-plugin-image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function Carousel() {
	const totalSlides = 3;
	const interval = '10000';
	const [ isActive, setActive ] = useState('false');
	const [ isPlaying, setPlaying ] = useState('true');
	const [ currentSlide, setCurrentSlide ] = useState(1);

	const handleToggle = () => {
		setActive(!isActive);
		setCurrentSlide();
	};

	useEffect(
		() => {
			if (!isActive) {
				setActive(!isActive);
				setPlaying(!isPlaying);
			}
		},
		[ isPlaying, isActive ]
	);

	useEffect(() => {
		function change(slide) {
			setCurrentSlide(slides.indexOf(slide) + 1);
		}
		let slides = document.querySelectorAll('.carousel-slide');
		slides = [ ...slides ];
		slides.forEach((slide) => slide.addEventListener('transitionstart', () => change(slide)));

		return () => {
			slides.forEach((slide) =>
				slide.removeEventListener('transitionstart', () => change(slide))
			);
		};
	}, []);

	return (
		<CarouselProvider
			className="carousel__wrapper"
			id="carousel"
			naturalSlideWidth={1920}
			naturalSlideHeight={941}
			totalSlides={totalSlides}
			infinite
			interval={interval}
			isPlaying={isPlaying}
			visibleSlides={1}
		>
			<Slider
				className="carousel__slider"
				classNameAnimation="fade-animation"
				aria-label="slider"
			>
				<Slide
					className="carousel-slide"
					classNameHidden="hide"
					classNameVisible="show"
					index={0}
					aria-label="slide"
				>
					<StaticImage
						className="carousel-image"
						src="../images/Carousel/slide1.webp"
						alt="This is the first Image"
					/>
				</Slide>

				<Slide
					className="carousel-slide"
					classNameHidden="hide"
					classNameVisible="show"
					index={1}
					aria-label="slide"
				>
					<StaticImage
						className="carousel-image"
						src="../images/Carousel/slide2.webp"
						alt="This is the second Image"
					/>
				</Slide>
				<Slide
					className="carousel-slide"
					classNameHidden="hide"
					classNameVisible="show"
					index={2}
					aria-label="slide"
				>
					<StaticImage
						className="carousel-image"
						src="../images/Carousel/slide3.webp"
						alt="This is the third Image"
					/>
				</Slide>
			</Slider>

			<ButtonBack
				id="restart-button"
				className="carousel__back-button"
				aria-label="button left"
				onClick={handleToggle}
			>
				<span>
					<FiArrowLeft className="carousel-arrow-left" />
				</span>
			</ButtonBack>
			<ButtonNext
				onClick={handleToggle}
				id="restart-button"
				className="carousel__next-button"
				aria-label="button right"
			>
				<span>
					<FiArrowRight className="carousel__arrow-right" />
				</span>
			</ButtonNext>
			<div className='carousel__progressbar'>
				<h4 className="carousel__current">0{currentSlide}</h4>
			<h4 className="carousel__total">0{totalSlides}</h4>
			<div className="carousel__bar-background" />

			<div
				// ref={ref}
				id="bar"
				className={isActive ? 'carousel__bar' : null}
				data-style="smooth"
			>
				<div />
			</div>
			</div>
			
		</CarouselProvider>
	);
}
