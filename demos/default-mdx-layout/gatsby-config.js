module.exports = {
  siteMetadata: {
    title: 'MDX Home',
  },
  plugins: [
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
