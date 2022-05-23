const path = require(`path`);

module.exports = {
	pathPrefix: '/adream-site',
	siteMetadata: {
		title: `aDream site`,
		description: `recruitment project`,
		copyright: `This website is copyright 2022 Patrycja Leśniak`,
		design: `Proudly designed by ADream`,
		siteUrl: `https://patrycja-i-lesniak.github.io/adream-site/`
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
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		 {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
	]
};
