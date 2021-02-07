/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Ben Ragsdale Stuff',
    description: 'Ben Ragsdale\'s portfolio.'
  }, 
  plugins: ['gatsby-plugin-react-helmet', 
  "gatsby-transformer-json", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
     name:`pages`,
      path: `${__dirname}/src/pages/`
    }
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: []
    }
  }
],
  /* site config here */
}
