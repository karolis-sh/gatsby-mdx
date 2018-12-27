const path = require('path');

const cleanInsertableCode = require('./clean-insertable-code');

module.exports = (pluginOptions = {}) => {
  const options = Object.assign(
    { pagesPath: path.resolve(process.cwd(), 'src/pages') },
    pluginOptions
  );

  if (options.loaders == null) options.loaders = {};
  if (typeof options.loaders.js !== 'function') options.loaders.js = value => value;
  if (typeof options.loaders.mdx !== 'function') options.loaders.mdx = value => value;

  options.globalImports = cleanInsertableCode(options.globalImports);

  return options;
};
