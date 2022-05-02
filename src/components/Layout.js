import React from 'react';
import * as styles from './layout.module.scss';
import '../styles/global.scss';
import Header from "./Header";
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div>
			<div className={styles.layout}>
				<Header/>
				<div>{children}</div>
					<Footer />
			</div>
		
		</div>
	);
};

export default Layout;
