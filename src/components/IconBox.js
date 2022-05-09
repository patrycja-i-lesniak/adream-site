import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';


export default function IconBox() {
	return (
		<div className='iconContainer'>
			<div className='wrapper'>
				<div className='titleBox'>
					<h3 className='h3'>Lorem ipsum dolor sit amet, conse</h3>
					<div className='line' />
				</div>
				<div className='box'>
					<div>
						<StaticImage
							className='icon'
							src="../static/Icons/Group 603.svg"
							alt="icon"
						/>
					</div>
					<p className='paragraph'>Lorem ipsum</p>
				</div>

				<div className='box'>
					<div>
						<StaticImage
							className='icon'
							src="../static/Icons/Group 602.svg"
							alt="icon"
						/>
					</div>
					<p className='paragraph'>Lorem ipsum </p>
				</div>

				<div className='box'>
					<div>
						<StaticImage
							className='icon'
							src="../static/Icons/Group 601.svg"
							alt="icon"
						/>
					</div>
					<p className='paragraph'>Lorem ipsum </p>
				</div>

				<div className='box'>
					<div>
						<StaticImage
							className='icon'
							src="../static/Icons/Group 604.svg"
							alt="icon"
						/>
					</div>
					<p className='paragraph'>Lorem ipsum </p>
				</div>

				<div className='box'>
					<div>
						<StaticImage
							className='icon'
							src="../static/Icons/Group 598.svg"
							alt="icon"
						/>
					</div>

					<p className='paragraph'>
						Lorem ipsum dolor sit amet, conse lorem ipsum lorem
					</p>
				</div>

				<div className='box'>
					<div>
						<StaticImage
							className='icon'
							src="../static/Icons/Group 599.svg"
							alt="icon"
						/>
					</div>

					<p className='paragraph'>
						Lorem ipsum dolor sit amet, conse lorem ipsum lorem
					</p>
				</div>

				<div className='box'>
					<div>
						<StaticImage
							className='icon'
							src="../static/Icons/Group 600.svg"
							alt="icon"
						/>
					</div>

					<p className='paragraph'>Lorem ipsum dolor sit amet, conse</p>
				</div>
			</div>

			<button className='button'>
				<span>dowiedz się więcej</span>
				<StaticImage src="../static/Icons/buttonArrow.svg" alt="button arrow" />
			</button>
		</div>
	);
}
