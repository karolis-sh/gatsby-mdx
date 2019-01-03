import React from 'react';
import { renderToString } from 'react-dom/server';
import prettier from 'prettier';
import MDX from './MDXScopedRuntime';

const parse = mdx => prettier.format(renderToString(mdx), { parser: 'html' });

it('should render simple mdx', () => {
  expect(
    parse(
      <MDX>
        {`
# Lore ipsum

- Apples
- Pears
`}
      </MDX>
    )
  ).toMatchSnapshot();
});

it('should render simple mdx with layout', () => {
  expect(
    parse(
      <MDX>
        {`
export default ({children}) => <div id="layout">{children}</div>

# Hi
`}
      </MDX>
    )
  ).toMatchSnapshot();
});

it('should render the example', () => {
  expect(
    parse(
      <MDX
        scope={{
          Demo: () => <code>dem0</code>,
          // eslint-disable-next-line react/prop-types
          Layout: ({ children }) => <div id="layout">{children}</div>,
        }}
      >
        {`
import Demo from '../ui/Demo';
import Layout from '../ui/Layout';

export default Layout

# Hello, world!

<Demo />
`}
      </MDX>
    )
  ).toMatchSnapshot();
});
