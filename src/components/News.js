import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function News() {
	return (
		<div className="news__container">
			<h1 className="news__h1">Aktualności</h1>

			<div className="news__wrapper">
				<div className="news__box">
					<StaticImage
						className="news__photo"
						src="../images/News/shutterstock_1433594243.png"
						alt="photo1"
					/>
					<p className="news__paragraph"> 01.01.2021</p>
					<h3 className="news__h3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className="news__paragraph link" to="/">
						Więcej
					</p>
				</div>

				<div className="news__box">
					<StaticImage
						className="news__photo"
						src="../images/News/shutterstock_1575692173.png"
						alt="photo1"
					/>
					<p className="news__paragraph">01.01.2021</p>
					<h3 className="news__h3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className="news__paragraph link" to="/">
						Więcej
					</p>
				</div>

				<div className="news__box">
					<StaticImage
						className="news__photo"
						src="../images/News/shutterstock_763511722.png"
						alt="photo1"
					/>
					<p className="news__paragraph">01.01.2021</p>
					<h3 className="news__h3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className="news__paragraph link" to="/">
						Więcej
					</p>
				</div>
			</div>
		</div>
	);
}
