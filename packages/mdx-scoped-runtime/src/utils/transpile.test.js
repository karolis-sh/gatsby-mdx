import transpile from './transpile';

it('should transpile simple markdown', () => {
  expect(transpile({ mdx: '# Hi, world' })).toEqual({
    code:
      '<MDXTag name="wrapper" components={components}><MDXTag name="h1" components={components}>{`Hi, world`}</MDXTag></MDXTag>',
  });
});

it('should drop imports', () => {
  expect(
    transpile({
      mdx: `import { List } from "./ui";

# Hey test
<List items={'howdy'.split('')} />
`,
    })
  ).toEqual({
    code: `<MDXTag name="wrapper" components={components}>
  <MDXTag name="h1" components={components}>{\`Hey test\`}</MDXTag>
  <List items={'howdy'.split('')} /></MDXTag>`,
  });
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
    })
  ).toEqual({
    code: `<MDXTag name="wrapper" Layout={Layout} layoutProps={props} components={components}>

  <MDXTag name="h1" components={components}>{\`Hey test\`}</MDXTag>
  <List items={'howdy'.split('')} /></MDXTag>`,
  });
});
