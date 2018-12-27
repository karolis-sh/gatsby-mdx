const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
    },
  },
};

module.exports = function webpackCodeInjectLoader(source) {
  const options = getOptions(this) || {};
  validateOptions(schema, options, 'Code Inject Loader');

  return options.code ? `${options.code}\n\n${source}` : source;
};
