import React from 'react';
import '../styles/global.css';
import * as styles from './layout.module.css';


import Header from './Header';
// import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div className={styles.layout}>
			<div className={styles.content}>
				<Header />
				{children}
				{/* <Footer /> */}
			</div>
		</div>
	);
}
