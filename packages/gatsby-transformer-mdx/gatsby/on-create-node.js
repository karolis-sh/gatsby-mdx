const crypto = require('crypto');
const grayMatter = require('gray-matter');

module.exports = async ({ node, actions, loadNodeContent, createNodeId }) => {
  const { createNode, createParentChildLink } = actions;

  if (node.internal.type === 'File' && node.ext === '.mdx') {
    const content = await loadNodeContent(node);
    const { data: frontmatter } = grayMatter(content);

    const mdxNode = {
      id: createNodeId(`${node.id} -> Mdx`),
      children: [],
      parent: node.id,
      internal: { type: 'Mdx' },
      fileAbsolutePath: node.absolutePath,
      sourceName: node.sourceInstanceName,
      frontmatter: {
        ...frontmatter,
        title: frontmatter.title == null ? '' : frontmatter.title,
      },
    };

    mdxNode.internal.contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(mdxNode))
      .digest('hex');

    createNode(mdxNode);
    createParentChildLink({ parent: node, child: mdxNode });
  }
};
