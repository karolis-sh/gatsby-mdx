const resolvePath = require('./resolve-component-import-path');

it('should resolve path when components is in another directory', () => {
  expect(
    resolvePath(
      '/Users/someone/gatsby-mdx/gatsby-site/src/pages/index.mdx',
      '/Users/someone/gatsby-mdx/gatsby-site/src/layouts/DefaultLayout'
    )
  ).toEqual('../layouts/DefaultLayout');
});

it('should resolve path when components is in the same directory', () => {
  expect(
    resolvePath(
      '/Users/someone/gatsby-mdx/gatsby-site/src/pages/index.mdx',
      '/Users/someone/gatsby-mdx/gatsby-site/src/pages/DefaultLayout'
    )
  ).toEqual('./DefaultLayout');
});
