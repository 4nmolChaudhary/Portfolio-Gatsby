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
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.png`
      }
    }
  ]

}
