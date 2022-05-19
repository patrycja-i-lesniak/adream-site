import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import AnimatedButton from './AnimatedButton';
import { FiArrowRight } from 'react-icons/fi';

export default function Cards() {
	const data = useStaticQuery(graphql`
		query {
			card1: file(relativePath: { eq: "Cards/shutterstock_1877634640@2x.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770) {
						...GatsbyImageSharpFluid
					}
				}
			}
			card2: file(relativePath: { eq: "Cards/shutterstock_1723055614@2x.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770) {
						...GatsbyImageSharpFluid
					}
				}
			}
			card3: file(relativePath: { eq: "Cards/shutterstock_1677941275@2x.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770) {
						...GatsbyImageSharpFluid
					}
				}
			}
			card4: file(relativePath: { eq: "Cards/shutterstock_1433594243@2x.webp" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div>
			<div>
				<div className="row column-gap-1 justify-center ">
					<div className="col-12-xs col-6-lg">
						<div className="card">
							<div className="card__zoom">
								<Img
									className="card__image"
									fluid={data.card1.childImageSharp.fluid}
									alt="This is the first card"
								/>
								<AnimatedButton>
									<FiArrowRight className="arrow-right" />
								</AnimatedButton>
							</div>

							<div className="card__content">
								<div className="card__yellow-box" />
								<div className="card__info">
									<h3 className="card__h3">Biuro</h3>
									<div className="card__text">
										<div className="card__line" />
										<p className="card__paragraph">od 1000 zł/msc</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12-xs col-6-lg">
						<div className="card ">
							<div className="card__zoom">
								<Img
									className="card__image"
									fluid={data.card2.childImageSharp.fluid}
									alt="This is the second card"
								/>
								<AnimatedButton>
									<FiArrowRight className="arrow-right" />
								</AnimatedButton>
							</div>

							<div className="card__content">
								<div className="card__yellow-box" />
								<div className="card__info">
									<h3 className="card__h3">
										Lorem<br />ipsum
									</h3>
									<div className="card__text">
										<div className="card__line" />
										<p className="card__paragraph">od 500 zł/msc</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12-xs col-6-lg">
						<div className="card ">
							<div className="card__zoom">
								<Img
									className="card__image"
									fluid={data.card3.childImageSharp.fluid}
									alt="This is the third card"
								/>
								<AnimatedButton>
									<FiArrowRight className="arrow-right" />
								</AnimatedButton>
							</div>

							<div className="card__content card__bottom">
								<div className="card__yellow-box " />
								<div className="card__info">
									<h3 className="card__h3">
										Biuro <br /> lorem
									</h3>
									<div className="card__text">
										<div className="card__line" />
										<p className="card__paragraph">od 100 zł/h</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12-xs col-6-lg">
						<div className="card ">
							<div className="card__zoom">
								<Img
									className="card__image"
									fluid={data.card4.childImageSharp.fluid}
									alt="This is the fourth card"
								/>
								<AnimatedButton>
									<FiArrowRight className="arrow-right" />
								</AnimatedButton>
							</div>

							<div className="card__content card__bottom">
								<div className="card__yellow-box" />
								<div className="card__info">
									<h3 className="card__h3">
										Biuro lorem ipsum <br />Lorem
									</h3>
									<div className="card__text">
										<div className="card__line" />
										<p className="card__paragraph">od 100 zł/h</p>
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
