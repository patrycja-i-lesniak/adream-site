import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { StaticImage } from 'gatsby-plugin-image';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function Carousel() {
	const { slide1, slide2, slide3, back, next } = useStaticQuery(graphql`
		query {
			slide1: file(relativePath: { eq: "Carousel/background1.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			slide2: file(relativePath: { eq: "Carousel/background2.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			slide3: file(relativePath: { eq: "Carousel/background3.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			back: file(relativePath: { eq: "Carousel/prev.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 47) {
						...GatsbyImageSharpFluid
					}
				}
			}
			next: file(relativePath: { eq: "Carousel/next.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 47) {
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
		>
			<Slider className="carousel-slider" classNameAnimation="fade-animation">
				<Slide classNameHidden="hide" classNameVisible="show" index={0}>
					<Img fluid={slide1.childImageSharp.fluid} alt="This is the first Image" />
					{/* <div className="info">
						<h1 className="h1">Firma</h1>
						<h2 className="h2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
						</h2>
					</div> */}
				</Slide>
				<Slide classNameHidden="hide" classNameVisible="show" index={1}>
					<Img fluid={slide2.childImageSharp.fluid} alt="This is the second Image" />
					{/* <div className="info">
						<h1 className="h1">Firma</h1>
						<h2 className="h2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
						</h2>
					</div> */}
				</Slide>
				<Slide classNameHidden="hide" classNameVisible="show" index={2}>
					<Img fluid={slide3.childImageSharp.fluid} alt="This is the third Image" />
					{/* <div className="info">
						<h1 className="h1">Firma</h1>
						<h2 className="h2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
						</h2>
					</div> */}
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
		</CarouselProvider>
	);
}
