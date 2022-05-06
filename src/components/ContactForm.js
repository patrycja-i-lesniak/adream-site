import React from 'react';
import * as styles from './contactForm.module.scss';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

export default function ContactForm() {
	return (
		<div className={`${"container-fluid"} ${styles.container}`}>
			{/* <div className={styles.container}> */}
			<form>
				<div className="mb-3">
					<h3 className={styles.h3}>
						Lorem ipsum <br />Lorem ipsum lorem ipsum
					</h3>
					<p className={styles.paragraph}>consectetur adipiscing elit. Ut auctor arcu</p>
					<h4 className={styles.h4}>Zostaw kontakt, zadzwonimy do Ciebie</h4>

					<input
						className={`${'form-control'} ${styles.input}`}
						type="text"
						placeholder="Imię i Nazwisko"
						aria-label="default input example"
					/>

					<input
						className={`${'form-control'} ${styles.input}`}
						type="text"
						placeholder="Telefon"
						aria-label="default input example"
					/>

					<input
						type="email"
						className={`${'form-control'} ${styles.input}`}
						placeholder="Email"
						aria-describedby="emailHelp"
					/>

					<input
						className={`${'form-control'} ${styles.input}`}
						rows="1"
						placeholder="Lorem ipsum lorem ipsum"
					/>
					<div className={styles.checkboxWrapper}>
						<input
							type="checkbox"
							className={`${'form-check-input'} ${styles.checkbox}`}
							id="exampleCheck1"
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
