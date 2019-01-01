const path = require('path');
const Joi = require('joi');

const IMPORTS_SCHEMA = Joi.alternatives().try(
  Joi.string(),
  Joi.object().keys({
    value: Joi.string(),
    path: Joi.string(),
  })
);

const LAYOUT_SCHEMA = Joi.string();

const OPTIONS_SCHEMA = Joi.object()
  .keys({
    loaders: Joi.object().keys({
      js: Joi.func(),
      mdx: Joi.func(),
    }),
    pagesPath: Joi.string(),
    defaultImports: Joi.alternatives()
      .try(IMPORTS_SCHEMA, Joi.array().items(IMPORTS_SCHEMA))
      .optional(),
    defaultLayout: LAYOUT_SCHEMA.optional(),
  })
  .unknown();

module.exports = (pluginOptions = {}) => {
  const options = Object.assign(
    { pagesPath: path.resolve(process.cwd(), 'src/pages') },
    pluginOptions
  );

  if (options.loaders == null) options.loaders = {};
  if (options.loaders.js == null) options.loaders.js = () => undefined;
  if (options.loaders.mdx == null) options.loaders.mdx = () => undefined;

  const { error } = Joi.validate(options, OPTIONS_SCHEMA);
  if (error) throw new Error(`Invalid gatsby-transformer-mdx options - ${error.toString()}`);

  return options;
};
