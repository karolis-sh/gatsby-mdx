# gatsby-mdx monorepo

![Node CI](https://github.com/karolis-sh/gatsby-mdx/workflows/Node%20CI/badge.svg)
[![License: MIT][license-badge]][license]
[![code style: prettier][code-style-badge]][code-style]

## Packages

### [`gatsby-transformer-mdx`](/packages/gatsby-transformer-mdx)

MDX file support for Gatsby sites.

### [`mdx-scoped-runtime`](/packages/mdx-scoped-runtime)

This is a wrapper around [`mdx-runtime`][mdx-runtime] that strips down the `import ...`
and `export default ...` out of the MDX at runtime.

### [`netlify-cms-widget-mdx`](/packages/netlify-cms-widget-mdx)

Widget for mdx files in Netlify CMS.

## License

MIT

[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[code-style-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[code-style]: https://github.com/prettier/prettier
[mdx-runtime]: https://www.npmjs.com/package/@mdx-js/runtime
