/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Anmol Chaudhary - UI/UX Designer & Developer`,
    author: {
      name: `Anmol Chaudhary`,
      summary: `Portfolio`,
    },
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anmol Chaudhary - UI/UX Designer & Developer`,
        icon: `static/favicon.png`
      }
    }
  ]
}
