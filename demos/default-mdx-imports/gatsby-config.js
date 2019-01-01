module.exports = {
  siteMetadata: {
    title: 'MDX Home',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        defaultImports: [
          "import Clock from 'react-live-clock';",
          { value: '{ PinkBox }', path: `${__dirname}/src/ui` },
        ],
      },
    },
  ],
};
