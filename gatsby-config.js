module.exports = {
  siteMetadata: {
    title: `StrangerSystems`,
    description: `A games studio with an air of mystery.`,
    author: `StrangerSystems`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/s2_black.svg`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `posts`,
            path: `${__dirname}/posts`,
        },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-draft',
  ],
}
