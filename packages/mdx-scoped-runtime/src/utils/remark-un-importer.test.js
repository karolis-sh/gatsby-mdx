import mdx from '@mdx-js/mdx';
import plugin from './remark-un-importer';

it('should not change simple mdx', async () => {
  const MDX = `
# Hello world

- item 1
- item 2`;

  const result = await mdx(MDX, { mdPlugins: [plugin] });
  expect(result).toEqual(await mdx(MDX));
});

it('should remove imports', async () => {
  const MDX = `import { Divider } from "../../components";

# Hello world

<Divider />

- item 1
- item 2`;

  const result = await mdx(MDX, { mdPlugins: [plugin] });
  expect(result).not.toEqual(await mdx(MDX));
  expect(result).toMatchSnapshot();
});
