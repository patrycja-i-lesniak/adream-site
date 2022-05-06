import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
// import styled from 'styled-components';
import * as styles from './multipleBackground.module.scss';

import BackgroundImage from 'gatsby-background-image';

export default function MultipleBackground({className}) {

    const { slide1, slide2, slide3 } = useStaticQuery(
		graphql`
			query {
				slide1: file(relativePath: { eq: "Header/shutterstock_1090078049.png" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				slide2: file(relativePath: { eq: "Header/shutterstock_1790190785.png" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				slide3: file(relativePath: { eq: "Header/shutterstock_615439679.png" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`
	);

    const backgroundFluidImageStack = [
		slide3.childImageSharp.fluid,
		slide2.childImageSharp.fluid,
		slide1.childImageSharp.fluid
	].reverse();
  return (
    

	// Watch out for CSS's stacking order, especially when styling the individual
	// positions! The lowermost image comes last!

		<BackgroundImage
			Tag={`section`}
			id={`test`}
			className={className}
			fluid={backgroundFluidImageStack}
		>
			<div className={styles.innerWrapper}>
				<h2>This is a test of multiple background images.</h2>
			</div>
		</BackgroundImage>
  )
}


