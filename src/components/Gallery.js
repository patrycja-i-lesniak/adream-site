import React, { CSSProperties } from 'react';

import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import AnimatedButton from './AnimatedButton';

import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

export default function NewGallery() {
	const data = useStaticQuery(graphql`
		query {
			gallery: allFile(
				filter: { relativeDirectory: { eq: "Gallery" } }
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
								webpOptions: { quality: 50 }
							)
						}
					}
				}
			}
			featured: allFile(
				filter: { relativeDirectory: { eq: "Gallery/featured" } }
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
								webpOptions: { quality: 50 }
							)
						}
					}
				}
			}
		}
	`);

	// const images = [
	//   {
	//     src: '../images/Gallery/shutterstock_1197402031.webp"',
	//     thumbnail:
	//       '../images/Gallery/shutterstock_1197402031-thumb.webp"',
	//     caption: 'This is the 1 photo',
	//     width: 1920,
	//     height: 'auto'
	//   },
	// ]

	const options = {
		overlayColor: 'rgb(25, 136, 124)',
		captionStyle: {
			captionColor: '#FFFFFF',
			captionFontFamily: 'Poppins, sans-serif',
			captionFontSize: '40px',
			captionFontStyle: 'capitalize'
		},
		autoplaySpeed: 2500,
		transitionSpeed: 900,
		buttonsStyle: {
			buttonsBackgroundColor: '#FFFFFF',
			buttonsIconColor: '#000000'
		}
	};

	return (
		<div className="gallery">
			<SimpleReactLightbox>
				<h1 className="gallery-h1">Galeria</h1>
				<div className="gallery-line" />

				<SRLWrapper options={options}>
					<div className="scrolling-wrapper">
						<div className="card">
							<a
								href="../images/Gallery/shutterstock_1197402031.webp"
								data-attribute="SRL"
							>
								<StaticImage
									alt="This is the 1 photo"
									src="../images/Gallery/shutterstock_1197402031-thumb.webp"
									style={({ height: '888px' }, { width: '625px' })}
								/>
							</a>
						</div>
						<div className="card">
							<a
								href="../images/Gallery/shutterstock_579651031.webp"
								data-attribute="SRL"
							>
								<StaticImage
									alt="This is the 2 photo"
									src="../images/Gallery/shutterstock_579651031-thumb.webp"
								/>
							</a>
						</div>
						<div className="card">
							<a
								href="../images/Gallery/shutterstock_1187833249.webp"
								data-attribute="SRL"
							>
								<StaticImage
									alt="This is the 3 photo"
									src="../images/Gallery/shutterstock_1187833249-thumb.webp"
								/>
							</a>
						</div>
						<div className="card double">
							{' '}
							<div className="white-box" />
							<a
								href="../images/Gallery/shutterstock_763511701.webp"
								data-attribute="SRL"
							>
								<StaticImage
									alt="This is the 5 photo"
									src="../images/Gallery/shutterstock_763511701-thumb.webp"
									style={{ height: '290px' }}
								/>
							</a>
							<div className="white-box" style={{ width: '600px' }} />
						</div>
						<div className="card double">
							<a
								href="../images/Gallery/shutterstock_763511722.webp"
								data-attribute="SRL"
							>
								<StaticImage
									alt="This is the 4 photo"
									src="../images/Gallery/shutterstock_763511722-thumb.webp"
									style={{ height: '577px' }}
								/>
							</a>
							<a
								href="../images/Gallery/shutterstock_610938071.webp"
								data-attribute="SRL"
							>
								<StaticImage
									alt="This is the 6 photo"
									src="../images/Gallery/shutterstock_610938071-thumb.webp"
									style={({ width: '1227' }, { height: '577px' })}
								/>
							</a>
						</div>
					</div>
				</SRLWrapper>
			</SimpleReactLightbox>
			<button className="gallery-back-button">
				<span>
					<FiArrowLeft className="gallery-arrow-left" />
				</span>
			</button>
			<button className="gallery-next-button">
				<span>
					<FiArrowRight className="gallery-arrow-right" />
				</span>
			</button>
		</div>
	);
}
