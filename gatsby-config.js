const path = require(`path`)

module.exports = {
	pathPrefix: "/patrycja-i-lesniak",
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
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [ `Poppins\:300,400,600,700,900` ],
				display: 'swap'
			}
		},
		{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `carousel`,
      path: `${__dirname}/src/images/Carousel`, 
    },
  }
	]
};
