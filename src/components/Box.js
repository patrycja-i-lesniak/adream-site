import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './box.module.scss';


export default function Box() {
	return (
		<div class={styles.container}>
			<div class={styles.box}>
				<StaticImage
					src="../static/Box/shutterstock_1877634640/shutterstock_1877634640.png"
					alt="photo1"
				/>
				<div class={styles.content}>
					<div class={styles.yellowBox} />

					<div class={styles.info}>
						<h3 class={styles.h3}>Biuro</h3>
						<div class={styles.infoBox}>
							<line class={styles.line} />
							<paragraph>od 1000 zł/msc</paragraph>
						</div>
					</div>
				</div>
			</div>
	
			<div class={styles.box}>
				<StaticImage
					src="../static/Box/shutterstock_1723055614/shutterstock_1723055614.png"
					alt="photo2"
				/>
				<div class={styles.content}>
					<div class={styles.yellowBox} />
					<div class={styles.info}>
						<h3 class={styles.h3}>
							Lorem <br />ipsum
						</h3>
						<div class={styles.infoBox}>
							<line class={styles.line} />
							<paragraph>od 500 zł/msc</paragraph>
						</div>
					</div>
				</div>
			</div>

			<div class={styles.box}>
				<StaticImage
					src="../static/Box/shutterstock_1677941275/shutterstock_1677941275.png"
					alt="photo3"
				/>
				<div class={`${styles.content} ${styles.bottomBox}`}>
					<div class={styles.yellowBox} />
					<div class={styles.info}>
						<h3 class={styles.h3}>
							Biuro lorem
						</h3>
						<div class={styles.infoBox}>
							<line class={styles.line} />
						<paragraph>od 1000zł/h</paragraph>
					</div>
					</div>
				</div>
			</div>

			<div class={styles.box}>
				<StaticImage
					src="../static/Box/shutterstock_1433594243/shutterstock_1433594243.png"
					alt="photo4"
				/>
				<div class={`${styles.content} ${styles.bottomBox}`}>
					<div class={styles.yellowBox} />
					<div class={styles.info}>
						<h3 class={styles.h3}>
							Lorem lorem ipsum Lorem
						</h3>
						<div class={styles.infoBox}>
							<line class={styles.line} />
						<paragraph>od 100 zł/h</paragraph>
					</div>
					</div>
				</div>
			</div>
			</div>
	);
}
