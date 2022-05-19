import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { GatsbyImage } from 'gatsby-plugin-image';
import AnimatedButton from './AnimatedButton';
import { FiArrowRight } from 'react-icons/fi';

export default function Cards() {
	const data = useStaticQuery(graphql`
		query {
			card1: file(relativePath: { eq: "Cards/card1.webp" }) {
				id
				childImageSharp {
					gatsbyImageData
				}
			}
			card2: file(relativePath: { eq: "Cards/card2.webp" }) {
				id
				childImageSharp {
					gatsbyImageData
				}
			}
			card3: file(relativePath: { eq: "Cards/card3.webp" }) {
				id
				childImageSharp {
					gatsbyImageData
				}
			}
			card4: file(relativePath: { eq: "Cards/card4.webp" }) {
				id
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);
	return (
		<div>
			<div>
				<div className="row column-gap-1 justify-center ">
					<div className="col-12-xs col-6-lg">
						<div className="card__box">
							<div className="card__box-zoom">
								<GatsbyImage
									className="card__box-image"
									image={data.card1.childImageSharp.gatsbyImageData}
									alt="This is the first card"
								/>
								<AnimatedButton>
									<FiArrowRight className="arrow-right" />
								</AnimatedButton>
							</div>

							<div className="card__box-content">
								<div className="card__box-content-yellow-box" />
								<div className="card__box-content-info">
									<h3 className="card__box-content-info-h3">Biuro</h3>
									<div className="card__box-content-info-text">
										<div className="card__box-content-info-text-line" />
										<p className="card__box-content-info-text-paragraph">
											od 1000 zł/msc
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12-xs col-6-lg">
						<div className="card__box">
							<div className="card__box-zoom">
								<GatsbyImage
									className="card__box-image"
									image={data.card2.childImageSharp.gatsbyImageData}
									alt="This is the second card"
								/>
								<AnimatedButton>
									<FiArrowRight className="arrow-right" />
								</AnimatedButton>
							</div>

							<div className="card__box-content">
								<div className="card__box-content-yellow-box" />
								<div className="card__box-content-info">
									<h3 className="card__box-content-info-h3">
										Lorem<br />ipsum
									</h3>
									<div className="card__box-content-info-text">
										<div className="card__box-content-info-text-line" />
										<p className="card__box-content-info-text-paragraph">
											od 500 zł/msc
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12-xs col-6-lg">
						<div className="card__box">
							<div className="card__box-zoom">
								<GatsbyImage
									className="card__box-image"
									image={data.card3.childImageSharp.gatsbyImageData}
									alt="This is the third card"
								/>
								<AnimatedButton>
									<FiArrowRight className="arrow-right" />
								</AnimatedButton>
							</div>

							<div className="card__box-content bottom">
								<div className="card__box-content-yellow-box " />
								<div className="card__box-content-info">
									<h3 className="card__box-content-info-h3">
										Biuro <br /> lorem
									</h3>
									<div className="card__box-content-info-text">
										<div className="card__box-content-info-text-line" />
										<p className="card__box-content-info-text-paragraph">
											od 100 zł/h
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12-xs col-6-lg">
						<div className="card__box">
							<div className="card__box-zoom">
								<GatsbyImage
									className="card__box-image"
									image={data.card4.childImageSharp.gatsbyImageData}
									alt="This is the fourth card"
								/>
								<AnimatedButton>
									<FiArrowRight className="arrow-right" />
								</AnimatedButton>
							</div>

							<div className="card__box-content bottom">
								<div className="card__box-content-yellow-box" />
								<div className="card__box-content-info">
									<h3 className="card__box-content-info-h3">
										Biuro lorem ipsum <br />Lorem
									</h3>
									<div className="card__box-content-info-text">
										<div className="card__box-content-info-text-line" />
										<p className="card__box-content-info-text-paragraph">
											od 100 zł/h
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
