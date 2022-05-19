import React from 'react';


export default function AnimatedButton({children}) {
	return (
		<button className="animated-button" aria-label="Right arrow">
			<span>
				{children}
			</span>
		</button>
	);
}
