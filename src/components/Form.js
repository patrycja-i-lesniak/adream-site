import React from 'react';

export default function Form() {
	return (
		<div className="container-fluid form-container">
			<form action="https://formsubmit.co/patrycja.lesniak@gmail.com" method="POST">
				<div className="mb-3">
					<h3 className="form-h3">
						Lorem ipsum <br />Lorem ipsum lorem ipsum
					</h3>
					<p className="form-paragraph">consectetur adipiscing elit. Ut auctor arcu</p>
					<h4 className="form-h4">Zostaw kontakt, zadzwonimy do Ciebie</h4>

					<input
						className="form-control form-input"
						type="text"
						name="name"
						required
						placeholder="Imię i nazwisko"
						aria-label="name input "
					/>

					<input
						className="form-control form-input"
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
						className="form-control form-input"
						placeholder="Email"
						aria-describedby="email form-input"
					/>

					<input
						className="form-control form-input"
						rows="1"
						name="textarea"
						required
						placeholder="Lorem ipsum lorem ipsum"
						aria-describedby="text input"
					/>
					<div className="form-checkbox">
						<input
							type="checkbox"
							name="checkbox"
							required
							className="form-check-input"
							id="check"
						/>
						<div className="form-text">
							Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
							więcej...
						</div>
					</div>

					<button type="submit" className="form-button">
						<span>wyślij</span>
					</button>
				</div>
			</form>
		</div>
	);
}
