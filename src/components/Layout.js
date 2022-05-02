import React from 'react';
import * as styles from './layout.module.scss';
import '../styles/global.scss';

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div>{children}</div>
		</div>
	);
};

export default Layout;
