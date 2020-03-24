/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {

    // Metadata
  siteMetadata:{
    title: "Company Name",
    email: "CompanyName@email.com",
    phone: "+34 123 4567 89",
    fax: "12345678"
  },

  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
  ]
}
