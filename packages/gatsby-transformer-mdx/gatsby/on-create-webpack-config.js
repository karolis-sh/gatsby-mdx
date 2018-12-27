const path = require('path');
const remarkFrontmatter = require('remark-frontmatter');
const getOptions = require('../utils/get-options');
const remarkMdxDefaultLayoutPlugin = require('../utils/remark-mdx-default-layout');

module.exports = ({ actions, loaders }, pluginOptions) => {
  const options = getOptions(pluginOptions);

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /.mdx?$/,
          use: [
            loaders.js(options.loaders.js()),
            options.globalImports && {
              loader: path.resolve(__dirname, '../utils/webpack-code-inject-loader.js'),
              options: {
                code: options.globalImports,
              },
            },
            {
              loader: '@mdx-js/loader',
              options: options.loaders.mdx({
                mdPlugins: [
                  // Remove frontmatter from body output
                  [remarkFrontmatter, { type: 'yaml', marker: '-', fence: '---' }],
                  options.defaultLayout && [
                    remarkMdxDefaultLayoutPlugin,
                    { layout: options.defaultLayout },
                  ],
                ].filter(Boolean),
              }),
            },
          ].filter(Boolean),
        },
      ],
    },
  });
};
