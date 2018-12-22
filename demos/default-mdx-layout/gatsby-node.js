exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(filter: { sourceName: { eq: "pages" } }) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              pathname
              header
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allMdx.edges.forEach(({ node }) => {
    const {
      frontmatter: { pathname, header },
    } = node;

    createPage({
      path: `/${pathname || ''}`,
      component: node.fileAbsolutePath,
      context: { id: node.id, header },
    });
  });
};
