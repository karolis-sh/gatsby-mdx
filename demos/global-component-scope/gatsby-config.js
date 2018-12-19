module.exports = {
  siteMetadata: {
    title: 'MDX Home',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        globalImports: `
          import Clock from 'react-live-clock';
          import { PaperBox } from '~global-ui';
        `,
      },
    },
  ],
};
