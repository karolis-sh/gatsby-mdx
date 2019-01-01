const path = require('path');
const slash = require('slash');

module.exports = (from, to) => {
  if (!from) return to;
  const importPath = slash(path.relative(path.dirname(from), to));
  return /\.\.\//.test(importPath) ? importPath : `./${importPath}`;
};
