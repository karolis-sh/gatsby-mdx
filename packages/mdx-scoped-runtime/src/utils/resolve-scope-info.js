import { parse } from '@babel/parser';

export default code => {
  const scope = {};
  const result = {};

  const removeFromResult = ({ key, type, value }) => {
    switch (type) {
      case 'ImportDefault':
        delete result[key].ImportDefault;
        break;
      case 'ImportNamespace':
        delete result[key].ImportNamespace;
        break;
      case 'Import':
        delete result[key].Import[value];
        break;
      default:
        break;
    }
  };

  const addToScope = ({ name, key, type, value }) => {
    if (scope[name]) removeFromResult(scope[name]);
    scope[name] = { name, type, key, value };
  };

  parse(Array.isArray(code) ? code.join('\n') : code, { sourceType: 'module' })
    .program.body.filter(item => item.type === 'ImportDeclaration')
    .forEach(item => {
      const key = item.source.value;
      if (!result[key]) result[key] = {};
      if (!result[key].Import) result[key].Import = {};
      item.specifiers.forEach(specifier => {
        // eslint-disable-next-line prefer-destructuring
        const name = specifier.local.name;
        if (specifier.type === 'ImportDefaultSpecifier') {
          addToScope({ name, key, type: 'ImportDefault' });
          result[key].ImportDefault = name;
        } else if (specifier.type === 'ImportNamespaceSpecifier') {
          addToScope({ name, key, type: 'ImportNamespace' });
          result[key].ImportNamespace = name;
        } else if (specifier.type === 'ImportSpecifier') {
          addToScope({ name, key, type: 'Import', value: specifier.imported.name });
          result[key].Import[specifier.imported.name] = name;
        } else {
          // eslint-disable-next-line no-console
          console.warn(`Unhandled import specifier - ${JSON.stringify(specifier, null, 2)}`);
        }
      });
    });

  Object.keys(result).forEach(key => {
    if (!Object.values(result[key].Import).length) {
      delete result[key].Import;
    }
    if (!(result[key].ImportDefault || result[key].ImportNamespace || result[key].Import)) {
      delete result[key];
    }
  });

  return result;
};
