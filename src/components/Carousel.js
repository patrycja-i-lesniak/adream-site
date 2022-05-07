import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import * as styles from './carousel.module.scss';

export default function NewCarousel() {
	const { slide1, slide2, slide3, prev, next } = useStaticQuery(graphql`
		query {
			slide1: file(relativePath: { eq: "Carousel/background1.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			slide2: file(relativePath: { eq: "Carousel/background2.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			slide3: file(relativePath: { eq: "Carousel/background3.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
			prev: file(relativePath: { eq: "Carousel/prev.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 47) {
						...GatsbyImageSharpFluid
					}
				}
			}
			next: file(relativePath: { eq: "Carousel/next.png" }) {
				id
				childImageSharp {
					fluid(maxWidth: 47) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const buttons = document.querySelectorAll('[data-carousel-button]');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
			const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

			const activeSlide = slides.querySelector('[data-active]');
			let newIndex = [ ...slides.children ].indexOf(activeSlide) + offset;
			if (newIndex < 0) newIndex = slides.children.length - 1;
			if (newIndex >= slides.children.length) newIndex = 0;

			slides.children[newIndex].dataset.active = true;
			delete activeSlide.dataset.active;
		});
	});
	return (
		<div className={styles.wrapper}>
			<section aria-label="Newest Photos">
				<div className={styles.carousel} data-carousel>
					<div >
						<button
							className={`${styles.carousel_button} ${styles.prev}`}
							data-carousel-button="prev"
						>
							<span>
								<Img
									className={styles.arrow}
									fluid={prev.childImageSharp.fluid}
									alt="This is the prev arrow"
								/>
							</span>
						</button>
						<button
							className={`${styles.carousel_button} ${styles.next}`}
							data-carousel-button="next"
						>
							<span>
								<Img
									className={styles.arrow}
									fluid={next.childImageSharp.fluid}
									alt="This is the next arrow"
								/>
							</span>
						</button>
					</div>

					<ul data-slides>
						<li className={styles.slide} data-active>
							<Img
								fluid={slide1.childImageSharp.fluid}
								alt="This is the first Image"
							/>
						</li>
						<li className={styles.slide}>
							<Img
								fluid={slide2.childImageSharp.fluid}
								alt="This is the second Image"
							/>
						</li>
						<li className={styles.slide}>
							<Img
								fluid={slide3.childImageSharp.fluid}
								alt="This is the third Image"
							/>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
