import React from 'react';

export default function Form() {
	return (
		<div className="container-fluid form__container">
			<form
				className="form__wrapper"
				action="https://formsubmit.co/patrycja.lesniak@gmail.com"
				method="POST"
			>
				<div className="mb-3">
					<h3 className="form__h3">
						Lorem ipsum <br />Lorem ipsum lorem ipsum
					</h3>
					<p className="form__paragraph">consectetur adipiscing elit. Ut auctor arcu</p>
					<h4 className="form__h4">Zostaw kontakt, zadzwonimy do Ciebie</h4>

					<input
						className="form-control form__input"
						type="text"
						name="name"
						required
						placeholder="Imię i nazwisko"
						aria-label="name input "
					/>

					<input
						className="form-control form__input"
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
						className="form-control form__input"
						placeholder="Email"
						aria-describedby="email form-input"
					/>

					<input
						className="form-control form__input"
						rows="1"
						name="textarea"
						required
						placeholder="Lorem ipsum lorem ipsum"
						aria-describedby="text input"
					/>
					<div className="form__checkbox">
						<input
							type="checkbox"
							name="checkbox"
							required
							className="form__check-input"
							id="check"
						/>
						<label for="check">
							Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
							więcej...
						</label>
					</div>

					<button type="submit" className="form__button" aria-label="Send button">
						<span>wyślij</span>
					</button>
				</div>
			</form>
		</div>
	);
}
