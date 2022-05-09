import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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
			photo2: file(relativePath: { eq: "Gallery/shutterstock_579651031.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770, maxHeight: 547) {
						...GatsbyImageSharpFluid
					}
				}
			}
			photo3: file(relativePath: { eq: "Gallery/shutterstock_1187833249.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770, maxHeight: 321) {
						...GatsbyImageSharpFluid
					}
				}
			}
			photo4: file(relativePath: { eq: "Gallery/shutterstock_763511722.png" }) {
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
		<div className="gallery">
			<div className='container'>
				<h1 className='h1'>Galeria</h1>
				<div className='line' />
				<Img
					className='image1'
					fluid={data.photo1.childImageSharp.fluid}
					alt="This is the first Photo"
				/>
				<Img
					className='image2'
					fluid={data.photo2.childImageSharp.fluid}
					alt="This is the second Photo"
				/>
				<Img
					className='image3'
					fluid={data.photo3.childImageSharp.fluid}
					alt="This is the third Image"
				/>
				<Img
					className='image4'
					fluid={data.photo4.childImageSharp.fluid}
					alt="This is the fourth Image"
				/>
				<button className='prev'>
					<StaticImage src="../static/prev.svg" alt="prev" />
				</button>
				<button className='next'>
					{' '}
					<StaticImage src="../static/next.svg" alt="next" />
				</button>
			</div>
		</div>
	);
}
