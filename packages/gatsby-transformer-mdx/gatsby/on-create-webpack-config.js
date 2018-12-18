const remarkFrontmatter = require('remark-frontmatter');
const getOptions = require('../utils/get-options');

module.exports = ({ actions, loaders }, pluginOptions) => {
  const options = getOptions(pluginOptions);

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /.mdx?$/,
          use: [
            loaders.js(options.loaders.js()),
            {
              loader: '@mdx-js/loader',
              options: options.loaders.mdx({
                mdPlugins: [
                  // Remove frontmatter from body output
                  [remarkFrontmatter, { type: 'yaml', marker: '-', fence: '---' }],
                ],
              }),
            },
          ],
        },
      ],
    },
  });
};
