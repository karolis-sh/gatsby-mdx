const cleanInsertableCode = require('./clean-insertable-code');

module.exports = (pluginOptions = {}) => {
  const options = Object.assign({}, pluginOptions);

  if (options.loaders == null) options.loaders = {};
  if (typeof options.loaders.js !== 'function') options.loaders.js = value => value;
  if (typeof options.loaders.mdx !== 'function') options.loaders.mdx = value => value;

  options.globalImports = cleanInsertableCode(options.globalImports);
  options.defaultLayout = cleanInsertableCode(options.defaultLayout);

  return options;
};
