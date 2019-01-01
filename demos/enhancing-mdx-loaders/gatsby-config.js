const emoji = require('remark-emoji');

module.exports = {
  siteMetadata: {
    title: 'MDX Home',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        loaders: {
          mdx: () => ({ mdPlugins: [emoji] }),
        },
      },
    },
    'gatsby-plugin-catch-links',
  ],
};
