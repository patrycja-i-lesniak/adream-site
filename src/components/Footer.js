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

				<div>
					<p className="footer-logo">logo</p>
					<p className="footer-paragraph">
						ul. Towarowa 5/6<br />31-000 Kraków
					</p>
					<p className="footer-paragraph footer-bold">
						+48 999 999 999<br />email@email.com
					</p>
				</div>
				<p className="footer-policy">Polityka prywatności</p>
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
				</div>
				<p className="footer-info">Proudly designed by</p>
				<StaticImage
					className="footer-design"
					src="../static/Footer/logo_adream@2x.png"
					alt="logo"
				/>
			</div>
		</div>
	);
}
