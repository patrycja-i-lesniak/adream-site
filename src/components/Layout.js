import React from 'react';

import * as styles from './layout.module.css';
import '../styles/global.css';

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default Layout;