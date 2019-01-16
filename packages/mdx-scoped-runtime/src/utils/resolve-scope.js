export default (allPossibleValues, resolvedScope) => {
  const result = {};

  const addToScope = (key, value) => {
    if (result[key]) {
      throw new Error(`Scope resolve malfunction for reference - ${key}`);
    }
    result[key] = value;
  };

  Object.entries(resolvedScope).forEach(([modulePath, imports]) => {
    const possibleValue = allPossibleValues[modulePath];
    if (possibleValue) {
      // ImportDefault
      if (possibleValue.ImportDefault && imports.ImportDefault) {
        addToScope(imports.ImportDefault, possibleValue.ImportDefault);
      }

      if (possibleValue.Import) {
        // ImportNamespace
        if (imports.ImportNamespace) {
          addToScope(imports.ImportNamespace, possibleValue.Import);
        }

        // Import
        if (imports.Import) {
          Object.entries(imports.Import).forEach(([imported, importedAs]) => {
            if (possibleValue.Import[imported]) {
              addToScope(importedAs, possibleValue.Import[imported]);
            }
          });
        }
      }
    }
  });

  return result;
};
