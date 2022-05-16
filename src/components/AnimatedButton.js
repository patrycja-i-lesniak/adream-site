import React from 'react';


export default function AnimatedButton({children}) {
	return (
		<button className="animated-button ">
			<span>
				{children}
			</span>
		</button>
	);
}
