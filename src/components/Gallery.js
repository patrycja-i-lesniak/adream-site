import React, { useState, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function Gallery() {
	let scrl = useRef(null);
	const [ scrollX, setscrollX ] = useState(0);
	const [ scrolEnd, setscrolEnd ] = useState(false);

	const slide = (shift) => {
		scrl.current.scrollLeft += shift;
		setscrollX(scrollX + shift);

		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
			scrl.current.offsetWidth
		) {
			setscrolEnd(true);
		} else {
			setscrolEnd(false);
		}
	};

	const scrollCheck = () => {
		setscrollX(scrl.current.scrollLeft);
		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
			scrl.current.offsetWidth
		) {
			setscrolEnd(true);
		} else {
			setscrolEnd(false);
		}
	};

	// const data = useStaticQuery(graphql`
	// 	query {
	// 		gallery: allFile(
	// 			filter: { relativeDirectory: { eq: "Gallery" } }
	// 			sort: { fields: base, order: ASC }
	// 		) {
	// 			edges {
	// 				node {
	// 					id
	// 					base
	// 					publicURL
	// 					childImageSharp {
	// 						gatsbyImageData(
	// 							transformOptions: { fit: COVER }
	// 							placeholder: BLURRED
	// 							webpOptions: { quality: 50 }
	// 						)
	// 					}
	// 				}
	// 			}
	// 		}
	// 		featured: allFile(
	// 			filter: { relativeDirectory: { eq: "Gallery/featured" } }
	// 			sort: { fields: base, order: ASC }
	// 		) {
	// 			edges {
	// 				node {
	// 					id
	// 					base
	// 					publicURL
	// 					childImageSharp {
	// 						gatsbyImageData(
	// 							transformOptions: { fit: COVER }
	// 							placeholder: BLURRED
	// 							webpOptions: { quality: 50 }
	// 						)
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `);

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
					<div
						id="container"
						className="scrolling-wrapper"
						ref={scrl}
						onScroll={scrollCheck}
					>
						<div className="card gallery-zoom">
							<Link to="../images/Gallery/featured/image1.webp" data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										className="gallery-image"
										alt="This is the 1 photo"
										src="../images/Gallery/thumbs/thumb1.webp"
										style={({ height: '888px' }, { width: '625px' })}
									/>
								</div>
							</Link>
						</div>
						<div className="card gallery-zoom">
							<Link to="../images/Gallery/featured/image2.webp" data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										className="gallery-image"
										alt="This is the 2 photo"
										src="../images/Gallery/thumbs/thumb2.webp"
									/>
								</div>
							</Link>
						</div>
						<div className="card gallery-zoom">
							<Link to="../images/Gallery/featured/image3.webp" data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										className="gallery-image"
										alt="This is the 3 photo"
										src="../images/Gallery/thumbs/thumb3.webp"
									/>
								</div>
							</Link>
						</div>
						<div className="card gallery-zoom double">
							{' '}
							<div className="white-box" />
							<Link to="../images/Gallery/featured/image5.webp" data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										className="gallery-image"
										alt="This is the 5 photo"
										src="../images/Gallery/thumbs/thumb5.webp"
										style={{ height: '290px' }}
									/>
								</div>
							</Link>
							<div className="white-box" style={{ width: '600px' }} />
						</div>
						<div className="card gallery-zoom double">
							<Link to="../images/Gallery/featured/image4.webp" data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										className="gallery-image"
										alt="This is the 4 photo"
										src="../images/Gallery/thumbs/thumb4.webp"
										style={{ height: '577px' }}
									/>
								</div>
							</Link>
							<Link to="../images/Gallery/featured/image6.webp" data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										className="gallery-image"
										alt="This is the 6 photo"
										src="../images/Gallery/thumbs/thumb6.webp"
										style={({ width: '1227' }, { height: '577px' })}
									/>
								</div>
							</Link>
						</div>
					</div>
				</SRLWrapper>
			</SimpleReactLightbox>
			{scrollX !== 0 && (
				<button id="buttonBack" className="gallery-back-button" onClick={() => slide(-300)}>
					<span>
						<FiArrowLeft className="gallery-arrow-left" />
					</span>
				</button>
			)}
			{!scrolEnd && (
				<button id="buttonNext" className="gallery-next-button" onClick={() => slide(+300)}>
					<span>
						<FiArrowRight className="gallery-arrow-right" />
					</span>
				</button>
			)}
		</div>
	);
}
