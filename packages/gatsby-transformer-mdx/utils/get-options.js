const path = require('path');
const Joi = require('joi');
const cleanInsertableCode = require('./clean-insertable-code');

const OPTIONS_SCHEMA = Joi.object().keys({
  loaders: Joi.object()
    .keys({
      js: Joi.func().optional(),
      mdx: Joi.func().optional(),
    })
    .optional(),
  pagesPath: Joi.string(),
  globalImports: Joi.string().optional(),
  defaultLayout: Joi.string().optional(),
  plugins: Joi.any().optional(),
});

module.exports = (pluginOptions = {}) => {
  const options = Object.assign(
    { pagesPath: path.resolve(process.cwd(), 'src/pages') },
    pluginOptions
  );

  const { error } = Joi.validate(options, OPTIONS_SCHEMA);

  if (error) throw new Error(`Invalid gatsby-transformer-mdx options - ${error.toString()}`);

  if (options.loaders == null) options.loaders = {};
  if (options.loaders.js == null) options.loaders.js = value => value;
  if (options.loaders.mdx == null) options.loaders.mdx = value => value;

  options.globalImports = cleanInsertableCode(options.globalImports);

  return options;
};
