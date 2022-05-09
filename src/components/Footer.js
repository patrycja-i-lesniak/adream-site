import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="graphicContainer">
					<StaticImage
						className="graphic"
						src="../static/Footer/Group 586@2x.png"
						alt="graphic"
					/>
				</div>

				<div>
					<p className="logo">logo</p>
					<p className="paragraph">
						ul. Towarowa 5/6<br />31-000 Kraków
					</p>
					<p className="paragraph bold">
						+48 999 999 999<br />email@email.com
					</p>
				</div>
				<p className="policy">Polityka prywatności</p>
				<div className="footerNavigation">
					<div className="nav">
						<Link className="link" to="/">
							Strona główna
						</Link>
						<Link className="link" to="/">
							Poznaj przestrzeń
						</Link>
						<Link className="link" to="/offer">
							Oferta
						</Link>
					</div>
					<div className="nav">
						<Link className="link" to="/location">
							Lokalizacja
						</Link>
						<Link className="link" to="/office">
							Własne biuro
						</Link>
						<Link className="link" to="/contact">
							Kontakt
						</Link>
					</div>
				</div>
				<p className="info">Proudly designed by</p>
				<StaticImage
					className="aDreamLogo"
					src="../static/Footer/logo_adream@2x.png"
					alt="logo"
				/>
			</div>
		</div>
	);
}
