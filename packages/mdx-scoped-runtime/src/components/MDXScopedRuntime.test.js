import React from 'react';
import { renderToString } from 'react-dom/server';
import prettier from 'prettier';
import { mount } from 'enzyme';

import MDX from './MDXScopedRuntime';

const format = html => prettier.format(html, { parser: 'html' });

const parse = mdx => format(renderToString(mdx));

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

it('should handle componentDidCatch', () => {
  const ERROR_MESSAGE = 'Oh oh! something happened...';
  const wrapper = mount(<MDX># Oh boy</MDX>);
  wrapper.instance().componentDidCatch(new Error(ERROR_MESSAGE));
  expect(wrapper.text()).toContain(ERROR_MESSAGE);
  expect(format(wrapper.html())).toMatchSnapshot();
});
