require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Hovia',
    description: 'Hovia site',
    siteUrl: 'https://vibrant-poincare-f9e451.netlify.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.READ_ONLY_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Blog',
        short_name: 'GBlog',
        start_url: '/',
        background_color: '#524763',
        theme_color: '#524763',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `./src/templates/default-page.js`,
        name: 'default-page',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
          ],
    }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-plugin-netlify`, 
  ],
}
