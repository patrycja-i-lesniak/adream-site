import React from 'react';


export default function AnimatedButton({children}) {
	return (
		<button className="animated-button animated-button-back animated-button-next">
			<span>
				{children}
			</span>
		</button>
	);
}
