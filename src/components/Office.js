import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';


export default function Office() {
	return (
		<div className='office-container'>
			<div >
				<h1 className='office-h1'>Lorem ipsum vs własne biuro</h1>
				<div className='office-image-wrapper'>
					<StaticImage
					className='office-image'
					src="../images/Office/Group 258.png"
					alt="photo"
				/>
				</div>
				<div className='office-graphic-wrapper'>
					<StaticImage
					className='office-graphic-svg'
					src="../images/Office/Group 576.svg"
					alt="icon"
				/>
				</div>
				<div className='office-line' />
			</div>
		</div>
	);
}
