exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(filter: { sourceName: { eq: "blog" } }) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              pathname
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allMdx.edges.forEach(({ node }) => {
    const {
      frontmatter: { pathname, title },
    } = node;

    createPage({
      path: `/blog${pathname}`,
      component: node.fileAbsolutePath,
      context: { id: node.id, title },
    });
  });
};
