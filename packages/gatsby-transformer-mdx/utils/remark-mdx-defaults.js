const resolvePath = require('./resolve-component-import-path');
const resolveImportStatement = require('./resolve-import-statement');

const LAYOUT_COMPONENT_NAME = '___DefaultLayout';

module.exports = options => (tree, file) => {
  const filePath = file.history.length ? file.history.length[0] : undefined;

  if (options.layout) {
    if (!tree.children.find(item => item.type === 'export')) {
      tree.children.push({
        type: 'import',
        value: `import ${LAYOUT_COMPONENT_NAME} from "${resolvePath(filePath, options.layout)}";`,
      });
      tree.children.push({
        type: 'export',
        default: true,
        value: `export default ${LAYOUT_COMPONENT_NAME}`,
      });
    }
  }

  if (options.imports) {
    const imports = Array.isArray(options.imports) ? options.imports : [options.imports];
    imports.forEach(importStatement => {
      tree.children.unshift({
        type: 'import',
        value: resolveImportStatement(importStatement),
      });
    });
  }
};
