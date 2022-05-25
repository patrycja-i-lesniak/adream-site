import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function IconBox() {
	return (
		<div className="icon__container">
			<div className="icon__wrapper">
				<div className="icon__title">
					<h3 className="icon__h3">Lorem ipsum dolor sit amet, conse</h3>
					<div className="icon__line" />
				</div>
				<div className="icon__box">
					<StaticImage
						className="icon__image"
						src="../static/Icons/Group 603.svg"
						alt="icon__1"
					/>
					<p className="icon__paragraph">Lorem ipsum</p>
				</div>

				<div className="icon__box">
					<StaticImage
						className="icon__image lower "
						src="../static/Icons/Group 602.svg"
						alt="icon__2"
					/>
					<p className="icon__paragraph">Lorem ipsum </p>
				</div>

				<div className="icon__box">
					<StaticImage
						className="icon__image"
						src="../static/Icons/Group 601.svg"
						alt="icon__3"
					/>

					<p className="icon__paragraph">Lorem ipsum </p>
				</div>
				<div className="icon__box">
					<StaticImage
						className="icon__image"
						src="../static/Icons/Group 604.svg"
						alt="icon__4"
					/>
					<p className="icon__paragraph upper">Lorem ipsum </p>
				</div>
				<div className="icon__box">
					<StaticImage
						className="icon__image"
						src="../static/Icons/Group 598.svg"
						alt="icon__5"
					/>
					<p className="icon__paragraph">
						Lorem ipsum dolor sit amet, conse lorem ipsum lorem
					</p>
				</div>

				<div className="icon__box">
					<div className='box-up'>

					<StaticImage
						className="icon__image "
						src="../static/Icons/Group 599.svg"
						alt="icon__6"
					/>
					<p className="icon__paragraph">
						Lorem ipsum dolor sit amet, conse lorem ipsum lorem
					</p>
					</div>
				</div>

				<div className="icon__box">
					<StaticImage
						className="icon__image"
						src="../static/Icons/Group 600.svg"
						alt="icon__7"
					/>
					<p className="icon__paragraph">Lorem ipsum dolor sit amet, conse</p>
				</div>
			</div>

			<button className="icon__button" aria-label="more inf button">
				<span>dowiedz się więcej</span>
				<StaticImage src="../static/Icons/buttonArrow.svg" alt="button arrow" />
			</button>
		
		</div>
	);
}
