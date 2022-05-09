import React from 'react';

import * as styles from './layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
