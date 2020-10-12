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

### Default case

In your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: ['gatsby-transformer-mdx'],
};
```

This way all your mdx files in `src/pages` will converted to pages. Also you can
import mdx files as any other React component.

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

- [`pagesPath`](#define-mdx-pages-location-with-pagespath)
- [`loaders`](#altering-the-webpack-mdx-loaders-with-loaders)
- [`defaultLayout`](#define-default-mdx-layout-with-defaultlayout)
- [`defaultImports`](#adding-components-to-mdx-scope-with-defaultimports)

### Define mdx pages location with `pagesPath`

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        pagesPath: `${__dirname}/src/blog`,
      },
    },
  ],
};
```

\* The default is `__dirname + '/src/pages'`.

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
          // eg. Disable babel-loader cache
          js: () => ({ cacheDirectory: false }),
          // eg. Use emoji plugin
          mdx: () => ({ mdPlugins: [emoji] }),
        },
      },
    },
  ],
};
```

Checkout the [demo](https://github.com/karolis-sh/gatsby-mdx/tree/master/demos/enhancing-mdx-loaders).

### Define default mdx layout with `defaultLayout`

Pass the absolute path to module:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        defaultLayout: `${__dirname}/src/layouts/PurpleLayout`,
      },
    },
    'gatsby-plugin-catch-links',
  ],
};
```

You can always override it with `export default` syntax.

Checkout the [demo](https://github.com/karolis-sh/gatsby-mdx/tree/master/demos/default-mdx-layout).

\* Make sure that the provided default layout module exports the layout component
as default.

### Adding components to mdx scope with `defaultImports`

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-mdx',
      options: {
        defaultImports: [
          "import Clock from 'react-live-clock';",
          { value: '{ PinkBox }', path: `${__dirname}/src/ui` },
        ],
      },
    },
  ],
};
```

```md
<!-- any-mdx-file.mdx -->

# The time is <Clock format="HH:mm:ss" ticking />

<PinkBox>
  Lore ipsum
</PinkBox>
```

Checkout the [demo](https://github.com/karolis-sh/gatsby-mdx/tree/master/demos/default-mdx-imports).

## License

MIT

[version-badge]: https://badge.fury.io/js/gatsby-transformer-mdx.svg
[version]: https://www.npmjs.com/package/gatsby-transformer-mdx
[build-badge]: https://travis-ci.org/karolis-sh/gatsby-mdx.svg?branch=master
[build]: https://travis-ci.org/karolis-sh/gatsby-mdx
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[module-formats-badge]: https://img.shields.io/badge/module%20formats-cjs-green.svg
[unpkg-bundle]: https://unpkg.com/gatsby-transformer-mdx/
