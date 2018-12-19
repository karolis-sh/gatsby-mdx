exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~ui': `${__dirname}/src/ui`,
        '~global-ui': `${__dirname}/src/global-ui`,
      },
    },
  });
};
