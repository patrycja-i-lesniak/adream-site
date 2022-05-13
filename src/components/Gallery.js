import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import AnimatedButton from './AnimatedButton';

export default function Gallery() {
	const data = useStaticQuery(graphql`
		query {
			photo1: file(relativePath: { eq: "Gallery/Component 16 – 1.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 625, maxHeight: 888) {
						...GatsbyImageSharpFluid
					}
				}
			}
			photo2: file(relativePath: { eq: "Gallery/shutterstock_579651031@2x.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770, maxHeight: 547) {
						...GatsbyImageSharpFluid
					}
				}
			}
			photo3: file(relativePath: { eq: "Gallery/shutterstock_1187833249@2x.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770, maxHeight: 321) {
						...GatsbyImageSharpFluid
					}
				}
			}
			photo4: file(relativePath: { eq: "Gallery/shutterstock_763511722@2x.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 565, maxHeight: 578) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<div className="gallery-container">
			<h1 className="gallery-title">Galeria</h1>
			<div className="gallery-line" />
			<Img
				className="gallery-image1"
				fluid={data.photo1.childImageSharp.fluid}
				alt="This is the first Photo"
			/>
			<Img
				className="gallery-image2"
				fluid={data.photo2.childImageSharp.fluid}
				alt="This is the second Photo"
			/>
			<Img
				className="gallery-image3"
				fluid={data.photo3.childImageSharp.fluid}
				alt="This is the third Image"
			/>
			<Img
				className="gallery-image4"
				fluid={data.photo4.childImageSharp.fluid}
				alt="This is the fourth Image"
			/>
			{/* <button className="gallery-prev">
				<StaticImage src="../static/prev.svg" alt="prev" />
			</button>
			<button className="gallery-next">
				{' '}
				<StaticImage src="../static/next.svg" alt="next" />
			</button> */}
			<AnimatedButton className='animated-button animated-button-back'>
				<FiArrowLeft className="arrow-left" />
			</AnimatedButton>
			<AnimatedButton className='animated-button animated-button-next'>
				<FiArrowRight className="arrow-right" />
			</AnimatedButton>
		</div>
	);
}
