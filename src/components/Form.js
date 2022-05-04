import React from 'react';
import * as styles from './form.module.scss';

export default function Form() {
	return (
		<div className={styles.container}>
			<h3 className={styles.h3}>Lorem ipsum <br/>Lorem ipsum lorem ipsum</h3>
			<p className={styles.paragraph}>consectetur adipiscing elit. Ut auctor arcu</p>
			<h4 className={styles.h4}>Zostaw kontakt, zadzwonimy do Ciebie</h4>
			<form />
			<input className={styles.input} placeholder="Imię i nazwisko" />
			<input className={styles.input} placeholder="Telefon" />
			<input className={styles.input} placeholder="Email" />
			<input className={styles.input} placeholder="Lorem ipsum lorem ipsum" />
			<div className={styles.checkboxWrapper}>
				<input type="checkbox" className={styles.checkbox} />
				<p>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...</p>
			</div>

			<button className={styles.button}>
				<span>wyślij</span>
			</button>
		</div>

	);
}
