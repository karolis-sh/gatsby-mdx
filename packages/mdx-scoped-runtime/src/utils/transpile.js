import transformMdx from '@mdx-js/mdx';
import remove from 'unist-util-remove';

export default ({ mdx }) => {
  if (!mdx) return { code: undefined };

  const code = transformMdx.sync(mdx, {
    skipExport: true,
    mdPlugins: [
      () => tree => {
        remove(tree, 'import');
      },
    ],
  });

  return { code };
};
