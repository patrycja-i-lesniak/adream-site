import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './iconBox.module.scss';

export default function IconBox() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.titleBox}>
					<h3 className={styles.h3}>Lorem ipsum dolor sit amet, conse</h3>
					<div className={styles.line} />
				</div>

				<div className={styles.box}>
					<div>
						<StaticImage
							className={styles.icon}
							src="../static/Icons/Group 603.svg"
							alt="icon"
						/>
					</div>

					<p className={styles.paragraph}>Lorem ipsum</p>
				</div>

				<div className={styles.box}>
					<div>
						<StaticImage
							className={styles.icon}
							src="../static/Icons/Group 602.svg"
							alt="icon"
						/>
					</div>

					<p className={styles.paragraph}>Lorem ipsum dolor sit amet conse</p>
				</div>

				<div className={styles.box}>
					<div>
						<StaticImage
							className={styles.icon}
							src="../static/Icons/Group 601.svg"
							alt="icon"
						/>
					</div>

					<p className={styles.paragraph}>Lorem ipsum dolor sit amet conse</p>
				</div>

				<div className={styles.box}>
					<div>
						<StaticImage
							className={styles.icon}
							src="../static/Icons/Group 604.svg"
							alt="icon"
						/>
					</div>

					<p className={styles.paragraph}>Lorem ipsum dolor sit amet conse</p>
				</div>

				<div className={styles.box}>
					<div>
						<StaticImage
							className={styles.icon}
							src="../static/Icons/Group 598.svg"
							alt="icon"
						/>
					</div>

					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, conse lorem ipsum
					</p>
				</div>

				<div className={styles.box}>
					<div>
						<StaticImage
							className={styles.icon}
							src="../static/Icons/Group 599.svg"
							alt="icon"
						/>
					</div>

					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, conse lorem ipsum
					</p>
				</div>

				<div className={styles.box}>
					<div>
						<StaticImage
							className={styles.icon}
							src="../static/Icons/Group 600.svg"
							alt="icon"
						/>
					</div>

					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, conse lorem ipsum
					</p>
				</div>
			</div>

			<button className={styles.button}>
				Dowiedz się więcej
				<StaticImage
					className={styles.buttonArrow}
					src="../static/Icons/buttonArrow.svg"
					alt="button arrow"
				/>
			</button>
		</div>
	);
}
