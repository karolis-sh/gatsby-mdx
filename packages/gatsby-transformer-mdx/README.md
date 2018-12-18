# gatsby-transformer-mdx

[![npm version][version-badge]][version]
[![Build Status][build-badge]][build]
[![License: MIT][license-badge]][license]

[![code style: prettier][code-style-badge]][code-style]

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

### Altering the webpack mdx loaders via `loaders` option

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

## FAQ

1. How is this package different from [`gatsby-mdx`][other-gatsby-mdx]?

The idea of this is package is to provide MDX support without compromising compatibility,
so `gatsby-transformer-mdx` does have less features but works on IE and Edge.

## License

MIT

[version-badge]: https://badge.fury.io/js/gatsby-transformer-mdx.svg
[version]: https://www.npmjs.com/package/gatsby-transformer-mdx
[build-badge]: https://travis-ci.org/buz-zard/gatsby-mdx.svg?branch=master
[build]: https://travis-ci.org/buz-zard/gatsby-mdx
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[code-style-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[code-style]: https://github.com/prettier/prettier
[other-gatsby-mdx]: https://github.com/ChristopherBiscardi/gatsby-mdx
