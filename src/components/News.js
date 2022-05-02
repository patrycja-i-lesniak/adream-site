import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import * as styles from './news.module.scss';

export default function News() {
	return (
		<div class={styles.container}>
			<h1>Aktualności</h1>

			<div class={styles.wrapper}>
				<div class={styles.box}>
					<StaticImage
						class={styles.photo}
						src="../images/News/shutterstock_1433594243/shutterstock_1433594243.png"
						alt="photo1"
					/>
					<paragraph>01.01.2021</paragraph>
					<h3 class={styles.h3}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<paragraph as={Link} class={styles.link} to="/">
						Więcej
					</paragraph>
				</div>

				<div class={styles.box}>
					<StaticImage
						class={styles.photo}
						src="../images/News/shutterstock_1575692173.png"
						alt="photo1"
					/>
					<paragraph>01.01.2021</paragraph>
					<h3 class={styles.h3}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<paragraph as={Link} class={styles.link} to="/">
						Więcej
					</paragraph>
				</div>

				<div class={styles.box}>
					<StaticImage
						class={styles.photo}
						src="../images/News/shutterstock_763511722.png"
						alt="photo1"
					/>
					<paragraph>01.01.2021</paragraph>
					<h3 class={styles.h3}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h3>
					<paragraph as={Link} class={styles.link} to="/">
						Więcej
					</paragraph>
				</div>
			</div>
		</div>
	);
}
