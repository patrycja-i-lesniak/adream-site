import React from 'react';

import Layout from '../components/Layout';
import Box from '../components/Box';
import IconBox from '../components/IconBox';
import Office from '../components/Office';
import News from '../components/News';
import Gallery from '../components/Gallery';

export default function index({ children }) {
	return (
		<Layout>
			<Box />
			<IconBox />
			<Office />
			<News />
			<Gallery />
			{children}
		</Layout>
	);
}
