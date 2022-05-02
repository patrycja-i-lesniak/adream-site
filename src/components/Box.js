import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './box.module.scss';

export default function Box() {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<StaticImage
					src="../static/Box/shutterstock_1877634640/shutterstock_1877634640.png"
					alt="photo1"
				/>
				<div className={styles.content}>
					<div className={styles.yellowBox} />

					<div className={styles.info}>
						<h3 className={styles.h3}>Biuro</h3>
						<div className={styles.infoBox}>
							<div className={styles.line} />
							<p className={styles.paragraph}>od 1000 zł/msc</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.box}>
				<StaticImage
					src="../static/Box/shutterstock_1723055614/shutterstock_1723055614.png"
					alt="photo2"
				/>
				<div className={styles.content}>
					<div className={styles.yellowBox} />
					<div className={styles.info}>
						<h3 className={styles.h3}>
							Lorem <br />ipsum
						</h3>
						<div className={styles.infoBox}>
							<div className={styles.line} />
							<p className={styles.paragraph}>od 500 zł/msc</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.box}>
				<StaticImage
					src="../static/Box/shutterstock_1677941275/shutterstock_1677941275.png"
					alt="photo3"
				/>
				<div className={`${styles.content} ${styles.bottomBox}`}>
					<div className={styles.yellowBox} />
					<div className={styles.info}>
						<h3 className={styles.h3}>Biuro lorem</h3>
						<div className={styles.infoBox}>
							<div className={styles.line} />
							<p className={styles.paragraph}>od 1000zł/h</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.box}>
				<StaticImage
					src="../static/Box/shutterstock_1433594243/shutterstock_1433594243.png"
					alt="photo4"
				/>
				<div className={`${styles.content} ${styles.bottomBox}`}>
					<div className={styles.yellowBox} />
					<div className={styles.info}>
						<h3 className={styles.h3}>Lorem lorem ipsum Lorem</h3>
						<div className={styles.infoBox}>
							<div className={styles.line} />
							<p className={styles.paragraph}>od 100 zł/h</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
