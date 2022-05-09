import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Navbar />
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
