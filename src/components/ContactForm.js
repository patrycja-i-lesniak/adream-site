import React from 'react';
import * as styles from './contactForm.module.scss';

export default function ContactForm() {
	return (
		<div className={`${'container-fluid'} ${styles.container}`}>
			{/* <div className={styles.container}> */}
			<form action="https://formsubmit.co/patrycja.lesniak@gmail.com" method="POST">
				<div className="mb-3">
					<h3 className={styles.h3}>
						Lorem ipsum <br />Lorem ipsum lorem ipsum
					</h3>
					<p className={styles.paragraph}>consectetur adipiscing elit. Ut auctor arcu</p>
					<h4 className={styles.h4}>Zostaw kontakt, zadzwonimy do Ciebie</h4>

					<input
						className={`${'form-control'} ${styles.input}`}
						type="text"
						name="name"
						required
						placeholder="Imię i nazwisko"
						aria-label="name input "
					/>

					<input
						className={`${'form-control'} ${styles.input}`}
						type="text"
						name="phone"
						required
						placeholder="Telefon"
						aria-label="phone input"
					/>

					<input
						type="email"
						name="email"
						required
						className={`${'form-control'} ${styles.input}`}
						placeholder="Email"
						aria-describedby="email input"
					/>

					<input
						className={`${'form-control'} ${styles.input}`}
						rows="1"
						name="textarea"
						required
						placeholder="Lorem ipsum lorem ipsum"
						aria-describedby="text input"
					/>
					<div className={styles.checkboxWrapper}>
						<input
							type="checkbox"
							name="checkbox"
							required
							className={`${'form-check-input'} ${styles.checkbox}`}
							id="check"
						/>
						<div className={`${'form-text'} ${styles.text}`}>
							Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
							więcej...
						</div>
					</div>

					<button type="submit" className={styles.button}>
						<span>wyślij</span>
					</button>
				</div>
			</form>
			{/* </div> */}
		</div>
	);
}
