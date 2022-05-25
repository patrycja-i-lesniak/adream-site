import React from 'react';

import Layout from '../components/Layout';
import Cards from '../components/Cards';
import IconBox from '../components/IconBox';
import Office from '../components/Office';
import News from '../components/News';
import Gallery from '../components/Gallery';

export default function index({ children }) {
	return (
		<Layout>
			<Cards/>
			<IconBox />
			<Office />
			<News />
			<Gallery />
			{children}
		</Layout>
	);
}
