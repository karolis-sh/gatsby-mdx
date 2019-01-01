import transpile from './transpile';

it('should transpile simple markdown', () => {
  expect(transpile({ mdx: '# Hi, world' }).code).toMatchSnapshot();
});

it('should drop imports', () => {
  expect(
    transpile({
      mdx: `import { List } from "./ui";

# Hey test
<List items={'howdy'.split('')} />
`,
    }).code
  ).toMatchSnapshot();
});

it('should handle layout', () => {
  expect(
    transpile({
      mdx: `import { List } from "./ui";
import Layout from "./Layout";

export default Layout

# Hey test
<List items={'howdy'.split('')} />
`,
    }).code
  ).toMatchSnapshot();
});
