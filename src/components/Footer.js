import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-graphic">
					<StaticImage
						className="footer-image"
						src="../static/Footer/Group 586@2x.png"
						alt="graphic"
					/>
				</div>
				<div className="footer-text">
					<div className="footer-text-right">
						<h1 className="footer-logo">logo</h1>
						<p className="footer-paragraph">
							ul. Towarowa 5/6<br />31-000 Kraków
						</p>
						<p className="footer-paragraph bold">
							+48 999 999 999<br />email@email.com
						</p>
						<p className="footer-policy">Polityka prywatności</p>
					</div>

					<div className="footer-navigation">
						<div className="footer-link-box">
							<Link className="footer-link" to="/">
								Strona główna
							</Link>
							<Link className="footer-link" to="/">
								Poznaj przestrzeń
							</Link>
							<Link className="footer-link" to="/offer">
								Oferta
							</Link>
						</div>
						<div className="footer-link-box">
							<Link className="footer-link" to="/location">
								Lokalizacja
							</Link>
							<Link className="footer-link" to="/office">
								Własne biuro
							</Link>
							<Link className="footer-link" to="/contact">
								Kontakt
							</Link>
						</div>
						<div className="footer-design">
							<p className="footer-design-text">Proudly designed by</p>
							<StaticImage
								className="footer-design-image"
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
