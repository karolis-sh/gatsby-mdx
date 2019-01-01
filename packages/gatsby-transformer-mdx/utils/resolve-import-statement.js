const resolvePath = require('./resolve-component-import-path');

module.exports = (item, filePath) => {
  if (typeof item === 'string') return item;
  return `import ${item.value} from "${resolvePath(filePath, item.path)}";`;
};
