module.exports = {
  siteMetadata: {
    title: 'MDX Home',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        defaultLayout: `
          import Layout from '../layouts/PurpleLayout'

          export default Layout
        `,
      },
    },
    'gatsby-plugin-catch-links',
  ],
};
