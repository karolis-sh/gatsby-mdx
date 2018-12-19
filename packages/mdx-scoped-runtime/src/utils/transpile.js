import transformMdx from '@mdx-js/mdx';
import * as Babel from '@babel/standalone'; // eslint-disable-line import/no-unresolved
import babelPluginSyntaxJsx from '@babel/plugin-syntax-jsx';
import babelPluginTransformRemoveImport from 'babel-plugin-transform-remove-import';

export default ({ mdx }) => {
  if (!mdx) return { code: undefined };

  let code = transformMdx.sync(mdx, { skipExport: true });
  // eslint-disable-next-line prefer-destructuring
  code = Babel.transform(code, {
    plugins: [babelPluginSyntaxJsx, babelPluginTransformRemoveImport],
  }).code;
  if (code.endsWith(';')) code = code.slice(0, code.length - 1);

  return { code };
};
