import transpile from '@mdx-js/mdx';

import remarkUnImporter from './remark-un-importer';
import resolveScopeInfo from './resolve-scope-info';
import resolveScope from './resolve-scope';

export default ({ mdPlugins = [], hastPlugins = [], mdx, allowedImports }) => {
  let scope = {};

  transpile.sync(mdx, {
    mdPlugins: [
      ...mdPlugins,
      [
        remarkUnImporter,
        {
          reporter: value => {
            scope = resolveScope(allowedImports, resolveScopeInfo(value));
          },
        },
      ],
    ],
    hastPlugins,
    skipExport: true,
  });

  return scope;
};
