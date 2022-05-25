import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__graphic">
					<StaticImage
						className="footer__image"
						src="../static/Footer/Group 586@2x.png"
						alt="graphic"
					/>
				</div>
				<div className="footer__text">
					<div className="footer__text-right">
						<h1 className="footer__logo">logo</h1>
						<p className="footer__paragraph">
							ul. Towarowa 5/6<br />31-000 Kraków
						</p>
						<p className="footer__paragraph bold">
							+48 999 999 999<br />email@email.com
						</p>
						<p className="footer__policy">Polityka prywatności</p>
					</div>

					<div className="footer__navigation">
						<div className="footer__link-box">
							<Link className="footer__link" to="/">
								Strona główna
							</Link>
							<Link className="footer__link" to="/">
								Poznaj przestrzeń
							</Link>
							<Link className="footer__link" to="/offer">
								Oferta
							</Link>
						</div>
						<div className="footer__link-box">
							<Link className="footer__link" to="/location">
								Lokalizacja
							</Link>
							<Link className="footer__link" to="/office">
								Własne biuro
							</Link>
							<Link className="footer__link" to="/contact">
								Kontakt
							</Link>
						</div>
						<div className="footer__design">
							<p className="footer__design-text">Proudly designed by</p>
							<StaticImage
								className="footer__design-image"
								src="../static/Footer/logo_adream@2x.png"
								alt="logo"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
