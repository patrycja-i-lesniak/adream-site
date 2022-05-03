module.exports = {
	siteMetadata: {
		title: 'aDream site',
		description: 'recruitment project',
		copyright: 'This website is copyright 2022 Patrycja Leśniak',
		design: 'Proudly designed by ADream',
		siteUrl: `https://adream-site.gatsbyjs.io/`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/projects/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Oxygen\:300,400,700`,
					`Red Rose` // second font
				],
				display: 'swap'
			}
		}
	]
};
