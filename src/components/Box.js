import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import AnimatedNextButton from './AnimatedNextButton';

export default function Box() {
	const data = useStaticQuery(graphql`
		query {
			box1: file(relativePath: { eq: "Box/shutterstock_1877634640.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770) {
						...GatsbyImageSharpFluid
					}
				}
			}
			box2: file(relativePath: { eq: "Box/shutterstock_1723055614.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770) {
						...GatsbyImageSharpFluid
					}
				}
			}
			box3: file(relativePath: { eq: "Box/shutterstock_1677941275.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 770) {
						...GatsbyImageSharpFluid
					}
				}
			}
			box4: file(relativePath: { eq: "Box/shutterstock_1433594243.png" }) {
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
		<div className="box-container">
			<div className="box-small">
				<div className="box-zoom">
					<Img
						className="box-image"
						fluid={data.box1.childImageSharp.fluid}
						alt="This is the first Box"
					/>
				</div>

				<div className="box-content">
					<div className="box-yellow" />

					<div className="box-info">
						<h3 className="box-h3">Biuro</h3>
						<div className="box-text">
							<div className="box-line" />
							<p className="box-paragraph">od 1000 zł/msc</p>
						</div>
					</div>
				</div>
				<AnimatedNextButton />
			</div>

			<div className="box-small">
				<div className="box-zoom">
					<Img
						className="box-image"
						fluid={data.box2.childImageSharp.fluid}
						alt="This is the second Box"
					/>
				</div>

				<div className="box-content">
					<div className="box-yellow" />
					<div className="box-info">
						<h3 className="box-h3">
							Lorem <br />ipsum
						</h3>
						<div className="box-text">
							<div className="box-line" />
							<p className="box-paragraph">od 500 zł/msc</p>
						</div>
					</div>
				</div>
				<AnimatedNextButton />
			</div>

			<div className="box-small">
				<div className="box-zoom">
					<Img
						className="box-image"
						fluid={data.box3.childImageSharp.fluid}
						alt="This is the third Box"
					/>
				</div>

				<div className="box-content box-bottom">
					<div className="box-yellow" />
					<div className="box-info">
						<h3 className="box-h3">
							Biuro <br />lorem
						</h3>
						<div className="box-text">
							<div className="box-line" />
							<p className="box-paragraph">od 1000zł/h</p>
						</div>
					</div>
				</div>
				<AnimatedNextButton />
			</div>

			<div className="box-small">
				<div className="box-zoom">
					<Img
						className="box-image"
						fluid={data.box4.childImageSharp.fluid}
						alt="This is the fourth Box"
					/>
				</div>
				<div className="box-content box-bottom">
					<div className="box-yellow" />
					<div className="box-info">
						<h3 className="box-h3">Biuro lorem ipsum Lorem</h3>
						<div className="box-text">
							<div className="box-line" />
							<p className="box-paragraph">od 100 zł/h</p>
						</div>
					</div>
				</div>
				<AnimatedNextButton />
			</div>
		</div>
	);
}
