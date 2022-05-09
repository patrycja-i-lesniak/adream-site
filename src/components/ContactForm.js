import React from 'react';

export default function ContactForm() {
	return (
		<div className="contactForm">
<div className='container-fluid container'>
			<form action="https://formsubmit.co/patrycja.lesniak@gmail.com" method="POST">
				<div className="mb-3">
					<h3 className='h3'>
						Lorem ipsum <br />Lorem ipsum lorem ipsum
					</h3>
					<p className='paragraph'>consectetur adipiscing elit. Ut auctor arcu</p>
					<h4 className='h4'>Zostaw kontakt, zadzwonimy do Ciebie</h4>

					<input
						className='form-control input'
						type="text"
						name="name"
						required
						placeholder="Imię i nazwisko"
						aria-label="name input "
					/>

					<input
						className='form-control input'
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
						className='form-control input'
						placeholder="Email"
						aria-describedby="email input"
					/>

					<input
						className='form-control input'
						rows="1"
						name="textarea"
						required
						placeholder="Lorem ipsum lorem ipsum"
						aria-describedby="text input"
					/>
					<div className='checkboxWrapper'>
						<input
							type="checkbox"
							name="checkbox"
							required
							className='form-check-input checkbox'
							id="check"
						/>
						<div className='form-text  text'>
							Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
							więcej...
						</div>
					</div>

					<button type="submit" className='button'>
						<span>wyślij</span>
					</button>
				</div>
			</form>
			
		</div>
		</div>
		
	);
}
