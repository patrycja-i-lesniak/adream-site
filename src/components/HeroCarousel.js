import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import * as styles from './heroCarousel.module.scss';

export default function HeroCarousel() {
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
		<CarouselProvider naturalSlideWidth={1920} naturalSlideHeight={941} totalSlides={3} infinite>
			<Slider className={styles.container}>
				<Slide index={0} className={styles.slide}>
					<Img fluid={slide1.childImageSharp.fluid} alt="This is the first Image" />
					{/* <div className="info">
						<h1 className="h1">Firma</h1>
						<h2 className="h2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
						</h2>
					</div> */}
				</Slide>
				<Slide index={0}>
					<Img fluid={slide2.childImageSharp.fluid} alt="This is the second Image" />
					{/* <div className="info">
						<h1 className="h1">Firma</h1>
						<h2 className="h2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
						</h2>
					</div> */}
				</Slide>
				<Slide index={0}>
					<Img fluid={slide3.childImageSharp.fluid} alt="This is the third Image" />
					{/* <div className="info">
						<h1 className="h1">Firma</h1>
						<h2 className="h2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
						</h2>
					</div> */}
				</Slide>
			</Slider>
			<ButtonBack className={styles.back}><Img className={styles.arrow} fluid={back.childImageSharp.fluid} alt="This is the back button" /></ButtonBack>
			<ButtonNext className={styles.next}><Img className={styles.arrow} fluid={next.childImageSharp.fluid} alt="This is the next button" /></ButtonNext>
		</CarouselProvider>
	);
}
