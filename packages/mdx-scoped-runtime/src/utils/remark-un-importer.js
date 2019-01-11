import remove from 'unist-util-remove';

export default ({ reporter } = {}) => tree => {
  const imports = tree.children
    .filter(item => item.type === 'import')
    .map(item => item.value)
    .join('\n');

  remove(tree, 'import');

  if (reporter) reporter(imports);
};
