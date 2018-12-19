# gatsby-transformer-mdx

[![npm version][version-badge]][version]
[![Build Status][build-badge]][build]
[![License: MIT][license-badge]][license]
[![module formats: cjs][module-formats-badge]][unpkg-bundle]

Mdx files handling in Gatsby sites.

## Install

As an npm package:

```shell
npm i -D gatsby-transformer-mdx
```

## How to use

### Using MDX as simple components

In your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: ['gatsby-transformer-mdx'],
};
```

### Using MDX to programmatically create pages

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content/blog`,
      },
    },
    'gatsby-transformer-mdx',
  ],
};
```

```javascript
// gatsby-node.js
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
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allMdx.edges.forEach(({ node }) => {
    const {
      frontmatter: { pathname },
    } = node;

    createPage({
      path: `/blog${pathname}`,
      component: node.fileAbsolutePath,
      context: { id: node.id },
    });
  });
};
```

## Options

- `loaders`
- `globalImports`

### Altering the webpack mdx loaders with `loaders`

```js
// gatsby-config.js
const emoji = require('remark-emoji');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        loaders: {
          js: () => ({ cacheDirectory: false }), // eg. disable babel-loader cache
          mdx: options => ({
            mdPlugins: [...options.mdPlugins, emoji], // eg. append emoji plugin
          }),
        },
      },
    },
  ],
};
```

### Adding components to mdx scope with `globalImports`

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        globalImports: `
          import Clock from 'react-live-clock';
          import { PaperBox } from '~global-ui';
        `,
      },
    },
  ],
};
```

Checkout the [demo](../../demos/global-component-scope).

\* To use local code - setup [aliases](../../demos/global-component-scope/gatsby-node.js)

## License

MIT

[version-badge]: https://badge.fury.io/js/gatsby-transformer-mdx.svg
[version]: https://www.npmjs.com/package/gatsby-transformer-mdx
[build-badge]: https://travis-ci.org/buz-zard/gatsby-mdx.svg?branch=master
[build]: https://travis-ci.org/buz-zard/gatsby-mdx
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[module-formats-badge]: https://img.shields.io/badge/module%20formats-cjs-green.svg
[unpkg-bundle]: https://unpkg.com/gatsby-transformer-mdx/
