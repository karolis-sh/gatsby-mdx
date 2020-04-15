import React from 'react';
import MDX from 'mdx-scoped-runtime';

import * as UI from './ui';

const components = {
  h1: ({ children, ...props }) => (
    <h1 style={{ color: 'tomato' }} {...props}>
      {children}
    </h1>
  ),
};

const initialMdx = `import { List } from "./ui";
import Layout from "./Layout";

export default Layout

# Hi, world!?
## wat?

<List items={'howdy'.split('')} />

<Hello name="Karolis" />
`;

export default class App extends React.Component {
  state = { mdx: initialMdx };

  render() {
    const { mdx } = this.state;
    return (
      <div style={{ width: 500, margin: '40px auto' }}>
        <textarea
          style={{ width: '100%', height: 130 }}
          value={mdx}
          onChange={(e) => this.setState({ mdx: e.target.value })}
        />
        <MDX
          components={components}
          scope={{ Hello: UI.Hello }}
          allowedImports={{
            './ui': { Import: UI },
          }}
        >
          {mdx}
        </MDX>
      </div>
    );
  }
}
