import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Carousel } from 'react-bootstrap';
import Img from 'gatsby-image';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as styles from './carousel.module.scss';

export default function CarouselSlider() {
	const data = useStaticQuery(graphql`
		query {
			slide1: file(relativePath: { eq: "Header/shutterstock_615439679.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			slide2: file(relativePath: { eq: "Header/shutterstock_1090078049.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			slide3: file(relativePath: { eq: "Header/shutterstock_1790190785.png" }) {
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
		<Carousel className={styles.carousel}>
			<Carousel.Item >
				<Img fluid={data.slide1.childImageSharp.fluid} alt="This is the first Image" />
			</Carousel.Item>
			<Carousel.Item>
				<Img fluid={data.slide2.childImageSharp.fluid} alt="This is the second Image" />
			</Carousel.Item>
			<Carousel.Item>
				<Img fluid={data.slide3.childImageSharp.fluid} alt="This is the third Image" />
			</Carousel.Item>
		</Carousel>
	)
}
