import React from 'react';
import { renderToString } from 'react-dom/server';
import prettier from 'prettier';
import { mount } from 'enzyme';
import OriginalMDX from '@mdx-js/runtime';

import MDX from './MDXScopedRuntime';

const format = html => prettier.format(html, { parser: 'html' });

const parse = mdx => format(renderToString(mdx));

it('should have proper test setup', () => {
  expect(
    parse(
      <OriginalMDX>
        {`
# Lore ipsum

- Apples
- Pears
`}
      </OriginalMDX>
    )
  ).toMatchSnapshot();
});

it('should render simple mdx', () => {
  const content = `
# Lore ipsum

- Apples
- Pears
`;
  const result = parse(<MDX>{content}</MDX>);
  expect(result).toMatchSnapshot();
  expect(result).toEqual(parse(<OriginalMDX>{content}</OriginalMDX>));
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
          Calendar: () => <span>The-Calend@r</span>,
        }}
      >
        {`
import Layout from '../ui/Layout';
import { Calendar } from '../components';
import Demo from 'wherever';

export default Layout

# Hello, world!

<Calendar />

<Demo />
`}
      </MDX>
    )
  ).toMatchSnapshot();
});

it('should render the example via {allowedImports}', () => {
  expect(
    parse(
      <MDX
        scope={{
          // eslint-disable-next-line react/prop-types
          Layout: ({ children }) => <div id="layout">{children}</div>,
        }}
        allowedImports={{
          wherever: {
            ImportDefault: () => <h1>This is a demo component</h1>,
          },
          '../components': {
            Import: {
              Calendar: () => <span>The-Calend@r</span>,
            },
          },
        }}
      >
        {`
import Layout from '../ui/Layout';
import { Calendar } from '../components';
import Demo from 'wherever';

export default Layout

# Hello, world!

<Calendar />

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
  wrapper.update();
  expect(wrapper.text()).toContain(ERROR_MESSAGE);
  expect(format(wrapper.html())).toMatchSnapshot();
});

it('should call onError', () => {
  const originalError = console.error;
  console.error = jest.fn();

  const onError = jest.fn();
  const wrapper = mount(<MDX onError={onError}>{'<div'}</MDX>);

  expect(onError).toHaveBeenCalled();
  expect(format(wrapper.html())).toMatchSnapshot();

  console.error = originalError;
});
