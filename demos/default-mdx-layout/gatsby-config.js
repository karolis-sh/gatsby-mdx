module.exports = {
  siteMetadata: {
    title: 'MDX Home',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        defaultLayout: `${__dirname}/src/layouts/PurpleLayout`,
      },
    },
    'gatsby-plugin-catch-links',
  ],
};
