import React from 'react';
import { ThemeProvider } from 'react-bootstrap';

import Layout from '../components/Layout';
import Box from '../components/Box';
import IconBox from '../components/IconBox';
import Office from '../components/Office';
import News from '../components/News';
import Gallery from '../components/Gallery';

export default function index({ children }) {
	const breakpoints = [ 'xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs' ];
	return (
		<ThemeProvider breakpoints={breakpoints}>
			<Layout>
				<Box />
				<IconBox />
				<Office />
				<News />
				<Gallery/>
				{children}
			</Layout>
		</ThemeProvider>
	);
}
