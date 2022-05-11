import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function IconBox() {
	return (
		<div className="icon-container">
			<div className="icon-wrapper">
				<div className="icon-title">
					<h3 className="icon-h3">Lorem ipsum dolor sit amet, conse</h3>
					<div className="icon-line" />
				</div>
				<div className="icon-box">
					<StaticImage
						className="icon-image"
						src="../static/Icons/Group 603.svg"
						alt="icon-1"
					/>
					<p className="icon-paragraph">Lorem ipsum</p>
				</div>

				<div className="icon-box">
					<StaticImage
						className="icon-image lower "
						src="../static/Icons/Group 602.svg"
						alt="icon-2"
					/>
					<p className="icon-paragraph">Lorem ipsum </p>
				</div>

				<div className="icon-box">
					<StaticImage
						className="icon-image"
						src="../static/Icons/Group 601.svg"
						alt="icon-3"
					/>

					<p className="icon-paragraph">Lorem ipsum </p>
				</div>
				<div className="icon-box">
					<StaticImage
						className="icon-image"
						src="../static/Icons/Group 604.svg"
						alt="icon-4"
					/>
					<p className="icon-paragraph upper">Lorem ipsum </p>
				</div>
				<div className="icon-box">
					<StaticImage
						className="icon-image"
						src="../static/Icons/Group 598.svg"
						alt="icon-5"
					/>
					<p className="icon-paragraph">
						Lorem ipsum dolor sit amet, conse lorem ipsum lorem
					</p>
				</div>

				<div className="icon-box">
					<div className='box-up'>

					<StaticImage
						className="icon-image "
						src="../static/Icons/Group 599.svg"
						alt="icon-6"
					/>
					<p className="icon-paragraph">
						Lorem ipsum dolor sit amet, conse lorem ipsum lorem
					</p>
					</div>
				</div>

				<div className="icon-box">
					<StaticImage
						className="icon-image"
						src="../static/Icons/Group 600.svg"
						alt="icon-7"
					/>
					<p className="icon-paragraph">Lorem ipsum dolor sit amet, conse</p>
				</div>
			</div>

			<button className="icon-button">
				<span>dowiedz się więcej</span>
				<StaticImage src="../static/Icons/buttonArrow.svg" alt="button arrow" />
			</button>
		
		</div>
	);
}
