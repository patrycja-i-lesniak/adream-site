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

	const { thumbs, featured } = useStaticQuery(graphql`
		query {
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

	const options = {
		buttons: {
			backgroundColor: 'rgba(30,30,36,0.8)',
			iconColor: 'rgba(255, 255, 255, 0.8)',
			iconPadding: '10px',
			showAutoplayButton: true,
			showCloseButton: true,
			showDownloadButton: true,
			showFullscreenButton: true,
			showNextButton: true,
			showPrevButton: true,
			showThumbnailsButton: true,
			size: '50px'
		},
		caption: {
			captionColor: '#FFFFFF',
			captionFontSize: 20,
			captionFontFamily: 'Poppins, sans-serif',
			captionFontWeight: '400',
			captionTextTransform: 'uppercase'
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
						<div className="card">
							<a href={featured.edges[0].node.publicURL} data-attribute="SRL">
								<div className="gallery-zoom">
									<StaticImage
										srl_gallery_image="true"
										className="gallery-image"
										alt="This is the 1 photo"
										src="../images/Gallery/thumbs/thumb1.webp"
										// style={({ height: '888px' }, { width: '625px' })}
									/>
								</div>
							</a>
						</div>
						<div className="card">
							<a href={featured.edges[1].node.publicURL} data-attribute="SRL">
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
						<div className="card">
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
						<div className="double">
							<div className="card">
								<div className="white-box" />
							</div>
							<div className="card">
								<a href={featured.edges[4].node.publicURL} data-attribute="SRL">
									<div className="gallery-zoom ">
										<StaticImage
											srl_gallery_image="true"
											className="gallery-image"
											alt="This is the 5 photo"
											src="../images/Gallery/thumbs/thumb5.webp"
											style={{ height: '288px' }, {width:'800px'}}
										/>
									</div>
								</a>
							</div>
							<div className="card">
								<div className="white-box" style={{ width: '600px' }} />
							</div>
						</div>
						<div class="double" style={{ gap: '30px' }}>
							<div className="card ">
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
							</div>

							<div className="card">
								<a href={featured.edges[5].node.publicURL} data-attribute="SRL">
									<div className="gallery-zoom">
										<StaticImage
											srl_gallery_image="true"
											className="gallery-image"
											alt="This is the 6 photo"
											src="../images/Gallery/thumbs/thumb6.webp"
											style={{ height: '577px' }}
										/>
									</div>
								</a>
							</div>
						</div>
					</div>
				</SRLWrapper>
			</SimpleReactLightbox>
			{scrollX !== 0 && (
				<button id="buttonBack" className="gallery-back-button" onClick={() => slide(-300)}>
					<span>
						<FiArrowLeft className="gallery-arrow" />
					</span>
				</button>
			)}
			{!scrolEnd && (
				<button id="buttonNext" className="gallery-next-button" onClick={() => slide(+300)}>
					<span>
						<FiArrowRight className="gallery-arrow" />
					</span>
				</button>
			)}
		</div>
	);
}
