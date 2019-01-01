const remarkFrontmatter = require('remark-frontmatter');
const getOptions = require('../utils/get-options');
const remarkMdxDefaultsPlugin = require('../utils/remark-mdx-defaults');

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
                  (options.defaultImports || options.defaultLayout) && [
                    remarkMdxDefaultsPlugin,
                    {
                      layout: options.defaultLayout,
                      imports: options.defaultImports,
                    },
                  ],
                ].filter(Boolean),
              }),
            },
          ],
        },
      ],
    },
  });
};
