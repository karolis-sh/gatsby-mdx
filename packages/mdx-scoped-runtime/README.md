# mdx-scoped-runtime

[![npm version][version-badge]][version]
[![Build Status][build-badge]][build]
[![License: MIT][license-badge]][license]
[![module formats: cjs][module-formats-badge]][unpkg-bundle]

This is a wrapper around [`mdx-runtime`][mdx-runtime] that strips down the
`import ...` and `export default Layout` out of the MDX at runtime.

## Install

```shell
npm i mdx-scoped-runtime
```

## How to use

You can provide any instances to the scope without any validation of the import path:

```js
import React from 'react';
import MDX from 'mdx-scoped-runtime';
import * as UI from '../components';
import Layout from '../ui/Layout';

// Provide custom components for markdown elements
const components = {
  h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
};

// Provide custom components that will be referenced as JSX
// in the markdown string
const scope = {
  ...UI,
  Demo: (props) => <h1>This is a demo component</h1>,
};

const mdx = `
import Layout from '../ui/Layout';
import { Calendar } from '../components';
import Demo from 'wherever';

export default Layout

# Hello, world!

<Calendar />

<Demo />
`;

export default () => (
  <MDX components={components} scope={scope}>
    {mdx}
  </MDX>
);
```

### Advanced usage

You can validate the imports via `allowedImports` prop:

```js
import React from 'react';
import MDX from 'mdx-scoped-runtime';
import * as UI from '../components';
import Layout from '../ui/Layout';

const scope = {
  // scope can still be used in combination with allowedImports
};

const mdx = `
import Layout from '../ui/Layout';
import { Calendar } from '../components';
import Demo from 'wherever';

export default Layout

# Hello, world!

<Calendar />

<Demo />
`;

const allowedImports = {
  wherever: {
    ImportDefault: (props) => <h1>This is a demo component</h1>,
  },
  '../ui/Layout': {
    ImportDefault: Layout,
  },
  '../components': {
    Import: UI,
  },
};

export default () => (
  <MDX
    components={components}
    scope={scope}
    allowedImports={allowedImports}
    onError={(error) => console.log(error)}
  >
    {mdx}
  </MDX>
);
```

## License

MIT

[version-badge]: https://badge.fury.io/js/mdx-scoped-runtime.svg
[version]: https://www.npmjs.com/package/mdx-scoped-runtime
[build-badge]: https://travis-ci.org/karolis-sh/gatsby-mdx.svg?branch=main
[build]: https://travis-ci.org/karolis-sh/gatsby-mdx
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[mdx-runtime]: https://www.npmjs.com/package/@mdx-js/runtime
[module-formats-badge]: https://img.shields.io/badge/module%20formats-cjs-green.svg
[unpkg-bundle]: https://unpkg.com/mdx-scoped-runtime/
