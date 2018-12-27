const resolvePath = require('./resolve-component-import-path');

const LAYOUT_COMPONENT_NAME = '___DefaultLayout';

module.exports = (options = {}) => (tree, file) => {
  if (!(options.layout && typeof options.layout === 'string')) {
    throw new Error(`Invalid layout option provided - ${JSON.stringify(options.layout)}`);
  }

  if (!tree.children.find(item => item.type === 'export')) {
    const layoutPath = file.history.length
      ? resolvePath(file.history[0], options.layout)
      : options.layout;
    tree.children.push({
      type: 'import',
      value: `import ${LAYOUT_COMPONENT_NAME} from "${layoutPath}";`,
    });
    tree.children.push({
      type: 'export',
      default: true,
      value: `export default ${LAYOUT_COMPONENT_NAME}`,
    });
  }
};
