const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');
const grayMatter = require('gray-matter');
const hasDefinedLayout = require('./has-defined-layout');

const schema = {
  type: 'object',
  properties: {
    globalImports: {
      type: 'string',
    },
    defaultLayout: {
      type: 'string',
    },
  },
};

module.exports = function webpackCodeInjectLoader(source) {
  const options = getOptions(this) || {};
  validateOptions(schema, options, 'Mdx Code Inject Loader');

  const codeToInject = [
    options.globalImports,
    hasDefinedLayout(source) ? null : options.defaultLayout,
  ]
    .filter(Boolean)
    .join('\n');

  if (!codeToInject) return source;

  const { data, content } = grayMatter(source);
  return grayMatter.stringify(`${codeToInject}\n\n${content}`, data);
};
