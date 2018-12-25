# gatsby-mdx monorepo

[![Build Status][build-badge]][build]
[![License: MIT][license-badge]][license]
[![code style: prettier][code-style-badge]][code-style]

## Packages

### [`gatsby-transformer-mdx`](/packages/gatsby-transformer-mdx)

MDX file support for Gatsby sites.

### [`mdx-scoped-runtime`](/packages/mdx-scoped-runtime)

This is a wrapper around [`mdx-runtime`][mdx-runtime] that strips down the `import ...`
and `export default Layout` out of the MDX at runtime.

## License

MIT

[build-badge]: https://travis-ci.org/buz-zard/gatsby-mdx.svg?branch=master
[build]: https://travis-ci.org/buz-zard/gatsby-mdx
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[code-style-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[code-style]: https://github.com/prettier/prettier
