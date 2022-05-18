import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function Carousel() {
	const { slide1, slide2, slide3 } = useStaticQuery(graphql`
		query {
			slide1: file(relativePath: { eq: "Carousel/slide1.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			slide2: file(relativePath: { eq: "Carousel/slide2.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			slide3: file(relativePath: { eq: "Carousel/slide3.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
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
					<Img
						className="carousel-image"
						fluid={slide1.childImageSharp.fluid}
						alt="This is the first Image"
					/>
				</Slide>

				<Slide classNameHidden="hide" classNameVisible="show" index={1}>
					<Img
						className="carousel-image"
						fluid={slide2.childImageSharp.fluid}
						alt="This is the second Image"
					/>
				</Slide>
				<Slide classNameHidden="hide" classNameVisible="show" index={2}>
					<Img
						className="carousel-image"
						fluid={slide3.childImageSharp.fluid}
						alt="This is the third Image"
					/>
				</Slide>
			</Slider>
			<ButtonBack className="carousel-back-button">
				<span>
					<FiArrowLeft className="carousel-arrow-left" />
				</span>
			</ButtonBack>
			<ButtonNext className="carousel-next-button">
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
