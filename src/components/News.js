import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import * as styles from './news.module.scss';

export default function News() {
	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Aktualności</h1>

			<div className={styles.wrapper}>
				<div className={styles.box}>
					<StaticImage
						className={styles.photo}
						src="../images/News/shutterstock_1433594243.png"
						alt="photo1"
					/>
					<p className={styles.paragraph}> 01.01.2021</p>
					<h3 className={styles.h3}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className={styles.link} to="/">
						Więcej
					</p>
				</div>

				<div className={styles.box}>
					<StaticImage
						className={styles.photo}
						src="../images/News/shutterstock_1575692173.png"
						alt="photo1"
					/>
					<p className={styles.paragraph}>01.01.2021</p>
					<h3 className={styles.h3}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className={styles.link} to="/">
						Więcej
					</p>
				</div>

				<div className={styles.box}>
					<StaticImage
						className={styles.photo}
						src="../images/News/shutterstock_763511722.png"
						alt="photo1"
					/>
					<p className={styles.paragraph}>01.01.2021</p>
					<h3 className={styles.h3}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<p as={Link} className={styles.link} to="/">
						Więcej
					</p>
				</div>
			</div>
		</div>
	);
}
