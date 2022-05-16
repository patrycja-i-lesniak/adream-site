import React, { useState, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function Gallery() {
	let scrl = useRef(null);
	const [ scrollX, setscrollX ] = useState(0);
	const [ scrolEnd, setscrolEnd ] = useState(false);

	const slide = (shift) => {
		scrl.current.scrollLeft += shift;
		setscrollX(scrollX + shift);
		Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth
			? setscrolEnd(true)
			: setscrolEnd(false);
	};

	const scrollCheck = () => {
		setscrollX(scrl.current.scrollLeft);
		Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth
			? setscrolEnd(true)
			: setscrolEnd(false);
	};

	const {thumbs, featured} = useStaticQuery(graphql`
		query {
			thumbs: allFile(
				filter: { relativeDirectory: { eq: "Gallery/thumbs" } }
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
								webpOptions: { quality: 25 }
							)
						}
					}
				}
			}
		}
	`);

	return (
		<div className="gallery">
			<SimpleReactLightbox>
				<h1 className="gallery-h1">Galeria</h1>
				<div className="gallery-line" />
				<SRLWrapper>
					<div
						id="container"
						className="scrolling-wrapper"
						ref={scrl}
						onScroll={scrollCheck}
					>
						<div className="card gallery-zoom">
							<a
								href={featured.edges[0].node.publicURL}
								data-attribute="SRL"
							>
								<div className="gallery-zoom">
									<StaticImage
										srl_gallery_image="true"
										className="gallery-image"
										alt="This is the 1 photo"
										src='../images/Gallery/thumbs/thumb1.webp'
										style={({ height: '888px' }, { width: '625px' })}
									/>
								</div>
							</a>
						</div>
						<div className="card gallery-zoom">
							<a
								href={featured.edges[1].node.publicURL}
								data-attribute="SRL"
							>
								<div className="gallery-zoom">
									<StaticImage
										srl_gallery_image="true"
										className="gallery-image"
										alt="This is the 2 photo"
										src="../images/Gallery/thumbs/thumb2.webp"
									/>
								</div>
							</a>
						</div>
						<div className="card gallery-zoom">
							<a href={featured.edges[2].node.publicURL} data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										srl_gallery_image="true"
										className="gallery-image"
										alt="This is the 3 photo"
										src="../images/Gallery/thumbs/thumb3.webp"
									/>
								</div>
							</a>
						</div>
						<div className="card gallery-zoom double">
							<div className="white-box" />
							<a href={featured.edges[4].node.publicURL} data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										srl_gallery_image="true"
										className="gallery-image"
										alt="This is the 5 photo"
										src="../images/Gallery/thumbs/thumb5.webp"
										style={{ height: '290px' }}
									/>
								</div>
							</a>
							<div className="white-box" style={{ width: '600px' }} />
						</div>
						<div className="card gallery-zoom double">
							<a href={featured.edges[3].node.publicURL} data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										srl_gallery_image="true"
										className="gallery-image"
										alt="This is the 4 photo"
										src="../images/Gallery/thumbs/thumb4.webp"
										style={{ height: '577px' }}
									/>
								</div>
							</a>
							<a href={featured.edges[5].node.publicURL} data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										srl_gallery_image="true"
										className="gallery-image"
										alt="This is the 6 photo"
										src="../images/Gallery/thumbs/thumb6.webp"
										style={({ width: '1227' }, { height: '577px' })}
									/>
								</div>
							</a>
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
