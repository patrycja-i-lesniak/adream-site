// import React, { useState } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import * as styles from './slider.module.scss';
// import Img from 'gatsby-image';

// export default function Slider() {
// 	const [ current, setCurrent ] = useState(0);
// 	// const length = ImageData.length;
//   	const length = 3

// 	function nextSlide() {
// 		setCurrent(current === length - 1 ? 0 : current + 1);
// 	}

// 	function prevSlide() {
// 		setCurrent(current === 0 ? length - 1 : current - 1);
// 	}

//   //  {ImageData.map( (slide,index) => {
//       returtn (
//           <div className="slide">
//              <h1 className="title"> {slide.title} </h1>
//              <p className="para"> {slide.body} </p>
//              { index === current && <img src={slide.image} alt="images" />}
//          </div> )
// }

// 	const data = useStaticQuery(graphql`
// 		query {
// 			slide1: file(relativePath: { eq: "Header/shutterstock_615439679.png" }) {
// 				id
// 				childImageSharp {
// 					fluid(maxWidth: 1920) {
// 						...GatsbyImageSharpFluid
// 					}
// 				}
// 			}
// 			slide2: file(relativePath: { eq: "Header/shutterstock_1090078049.png" }) {
// 				id
// 				childImageSharp {
// 					fluid(maxWidth: 1920) {
// 						...GatsbyImageSharpFluid
// 					}
// 				}
// 			}
// 			slide3: file(relativePath: { eq: "Header/shutterstock_1790190785.png" }) {
// 				id
// 				childImageSharp {
// 					fluid(maxWidth: 1920) {
// 						...GatsbyImageSharpFluid
// 					}
// 				}
// 			}
// 		}
// 	`);



// 	return (
// 		<div>
// 			<ul className={styles.slides}>

// 				<input type="radio" name="radio-btn" id="img-1" checked />
// 				<li className={styles.slideContainer}>
// 					<div className={styles.slide}>
// 						<Img fluid={data.slide1.childImageSharp.fluid} alt="This is the firstImage" />
// 					</div>

// 					<div className={styles.nav}>
// 						<label for="img-3" className={styles.prev} />
// 						<label for="img-2" className={styles.next} />
// 					</div>
// 				</li>


// 				<input type="radio" name="radio-btn" id="img-2" />
// 				<li className={styles.slideContainer}>
// 					<div className={styles.slide}>
						

// 						<Img fluid={data.slide2.childImageSharp.fluid} alt="This is the second Image" />
// 					</div>
// 					<div className={styles.nav}>
// 						<label for="img-1" className={styles.prev} />
// 						<label for="img-3" className={styles.next} />
// 					</div>
// 				</li>

// 				<input type="radio" name="radio-btn" id="img-3" />
// 				<li className={styles.slideContainer}>
// 					<div className={styles.slide}>
// 						<Img fluid={data.slide3.childImageSharp.fluid} alt="This is the third Image" />
// 					</div>
// 					<div className={styles.nav}>
// 						<label for="img-2" className={styles.prev} />
// 						<label for="img-1" className={styles.next} />
// 					</div>
// 				</li>

// 				<li className={styles.navDots}>
// 					<label for="img-1" className={styles.navDot} id="img-dot-1" />
// 					<label for="img-2" className={styles.navDot} id="img-dot-2" />
// 					<label for="img-3" className={styles.navDot} id="img-dot-3" />
// 				</li>
// 				<div>
//           <div>
//             	<label for="prev" className={styles.prev}>
// 						Previous
// 					</label>
//           </div>
				
// <div>
// <label for="next" className={styles.next}>
// 						Next
// 					</label>

// </div>
					
// 				</div>
// 			</ul>

// 			<button className={styles.button} onClick={prevSlide} >Prev</button>
// 			<button className={styles.button} onClick={nextSlide} >Next</button>
// 		</div>
// 	);
// }

 