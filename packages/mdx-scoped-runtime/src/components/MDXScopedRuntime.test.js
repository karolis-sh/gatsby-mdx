import React from 'react';
import { renderToString } from 'react-dom/server';
import prettier from 'prettier';
import MDX from './MDXScopedRuntime';

it('should render the example', () => {
  expect(
    prettier.format(
      renderToString(
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
      ),
      { parser: 'html' }
    )
  ).toMatchSnapshot();
});

it('should render simple mdx with layout', () => {
  expect(
    prettier.format(
      renderToString(
        <MDX>
          {`
export default ({children}) => <div id="layout">{children}</div>

# Hi
`}
        </MDX>
      ),
      { parser: 'html' }
    )
  ).toMatchSnapshot();
});
