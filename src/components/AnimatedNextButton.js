import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function AnimatedNextButton() {
	return (
		<button className="next-button">
			<span>
				<FiArrowRight className="arrow-right" />
			</span>
		</button>
	);
}
