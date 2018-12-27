const path = require('path');
const slash = require('slash');

module.exports = (from, to) => {
  const importPath = slash(path.relative(path.dirname(from), to));
  return /\.\.\//.test(importPath) ? importPath : `./${importPath}`;
};
