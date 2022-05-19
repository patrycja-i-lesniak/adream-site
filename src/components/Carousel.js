import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function Carousel() {
	const { carousel } = useStaticQuery(graphql`
		query {
			carousel: allFile(
				filter: { relativeDirectory: { eq: "Carousel" } }
				sort: { fields: base, order: ASC }
			) {
				edges {
					node {
						id
						base
						publicURL
						childImageSharp {
							gatsbyImageData(
								transformOptions: { fit: COVER }
								placeholder: BLURRED
								webpOptions: { quality: 25 }
							)
						}
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
					<GatsbyImage
						className="carousel-image"
						image={carousel.edges[0].node.childImageSharp.gatsbyImageData}
						alt="This is the first Image"
					/>
				</Slide>

				<Slide classNameHidden="hide" classNameVisible="show" index={1}>
					<GatsbyImage
						className="carousel-image"
						image={carousel.edges[1].node.childImageSharp.gatsbyImageData}
						alt="This is the second Image"
					/>
				</Slide>
				<Slide classNameHidden="hide" classNameVisible="show" index={2}>
					<GatsbyImage
						className="carousel-image"
						image={carousel.edges[2].node.childImageSharp.gatsbyImageData}
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
