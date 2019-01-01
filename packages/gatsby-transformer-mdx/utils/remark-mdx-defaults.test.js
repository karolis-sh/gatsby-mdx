const mdx = require('@mdx-js/mdx');
const plugin = require('./remark-mdx-defaults');

describe('layout', () => {
  const MDX_NO_LAYOUT_PLAIN = `
# Hello world

- item 1
- item 2
`;

  const MDX_NO_LAYOUT_WITH_IMPORTS = `
import Layout from "../components";

# Hello world

- item 1
- item 2

<Layout title="Yep" />
`;

  const MDX_WITH_DEFINED_LAYOUT = `
export default ({children}) => <div style={{border: '1px solid red'}}>{children}</div>

# The Title

Lore ipsum
`;

  const MDX_WITH_IMPORTED_LAYOUT = `
import Layout from "somewhere";

export default Layout

## Help

> node fix-stuff.js
`;

  it('should not override defined layout', async () => {
    const result0 = await mdx(MDX_WITH_DEFINED_LAYOUT);
    const result1 = await mdx(MDX_WITH_DEFINED_LAYOUT, {
      mdPlugins: [[plugin, { layout: '../components/Layout1' }]],
    });

    expect(result0).toEqual(result1);
    expect(result1).toMatchSnapshot();
  });

  it('should not override imported layout', async () => {
    const result0 = await mdx(MDX_WITH_IMPORTED_LAYOUT);
    const result1 = await mdx(MDX_WITH_IMPORTED_LAYOUT, {
      mdPlugins: [[plugin, { layout: '../components/Layout2' }]],
    });

    expect(result0).toEqual(result1);
    expect(result1).toMatchSnapshot();
  });

  it('should add layout to simple mdx', async () => {
    const result0 = await mdx(MDX_NO_LAYOUT_PLAIN);
    const result1 = await mdx(MDX_NO_LAYOUT_PLAIN, {
      mdPlugins: [[plugin, { layout: '../components/Layout3' }]],
    });

    expect(result0).not.toEqual(result1);
    expect(result1).toMatchSnapshot();
  });

  it('should add layout to mdx with imports', async () => {
    const result0 = await mdx(MDX_NO_LAYOUT_WITH_IMPORTS);
    const result1 = await mdx(MDX_NO_LAYOUT_WITH_IMPORTS, {
      mdPlugins: [[plugin, { layout: '../components/Layout4' }]],
    });

    expect(result0).not.toEqual(result1);
    expect(result1).toMatchSnapshot();
  });
});

describe('imports', () => {
  const MDX_SIMPLE = `import { Divider } from "../../components"

# Hello world

<Divider />

- item 1
- item 2

<Separator />
`;

  it('should import via string', async () => {
    const result = await mdx(MDX_SIMPLE, {
      mdPlugins: [[plugin, { imports: 'import { Separator } from "anywhere"' }]],
    });
    expect(result).toMatchSnapshot();
  });

  it('should import via list of strings', async () => {
    const result = await mdx(MDX_SIMPLE, {
      mdPlugins: [
        [
          plugin,
          {
            imports: ['import { Separator } from "anywhere"', 'import { Divider } from "ui-lib"'],
          },
        ],
      ],
    });
    expect(result).toMatchSnapshot();
  });
});
