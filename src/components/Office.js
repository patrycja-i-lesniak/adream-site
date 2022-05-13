import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Office() {
	return (
		<div className="office">
			<div className="office-wrapper">
				<div className="office-content">
					<StaticImage
						className="office-graphic-svg"
						src="../images/Office/Group 576.svg"
						alt="icon"
					/>
					<h1 className="office-content-h1">
						Lorem ipsum <br />vs własne biuro
					</h1>

					<div className="office-content-line" />
				</div>
			</div>
			<StaticImage
				className="office-image"
				src="../images/Office/Group 258.png"
				alt="photo"
			/>
		</div>
	);
}
