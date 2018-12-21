# mdx-scoped-runtime

[![npm version][version-badge]][version]
[![Build Status][build-badge]][build]
[![License: MIT][license-badge]][license]
[![module formats: cjs][module-formats-badge]][unpkg-bundle]

This is a wrapper around [`mdx-runtime`][mdx-runtime] that strips down the `import ...`
and `export default Layout` out of the MDX at runtime.

\* For now the package only works with `@mdx-js/(loader/mdx/runtime)@0.15.x` version.

## Install

```shell
npm i mdx-scoped-runtime @babel/standalone
```

## How to use

```js
import React from 'react';
import MDX from 'mdx-scoped-runtime';
import Demo from '../ui/Demo';
import Layout from '../ui/Layout';

// Provide custom components for markdown elements
const components = {
  h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
};

// Provide custom components that will be referenced as JSX
// in the markdown string
const scope = {
  Demo: props => <h1>This is a demo component</h1>,
};

const mdx = `
import Demo from '../ui/Demo';
import Layout from '../ui/Layout';

export default Layout

# Hello, world!

<Demo />
`;

export default () => (
  <MDX components={components} scope={{ Demo, Layout }}>
    {mdx}
  </MDX>
);
```

## License

MIT

[version-badge]: https://badge.fury.io/js/mdx-scoped-runtime.svg
[version]: https://www.npmjs.com/package/mdx-scoped-runtime
[build-badge]: https://travis-ci.org/buz-zard/gatsby-mdx.svg?branch=master
[build]: https://travis-ci.org/buz-zard/gatsby-mdx
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[mdx-runtime]: https://www.npmjs.com/package/@mdx-js/runtime
[module-formats-badge]: https://img.shields.io/badge/module%20formats-cjs-green.svg
[unpkg-bundle]: https://unpkg.com/mdx-scoped-runtime/
