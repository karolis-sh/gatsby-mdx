const clean = require('./clean-insertable-code');

it('should drop invalid/empty values', () => {
  expect(clean()).toBeUndefined();
  expect(clean(1)).toBeUndefined();
  expect(clean(false)).toBeUndefined();
  expect(clean(null)).toBeUndefined();
  expect(clean({})).toBeUndefined();
  expect(clean([])).toBeUndefined();
  expect(clean('')).toBeUndefined();
  expect(clean('   ')).toBeUndefined();
  expect(clean('  \n  \n ')).toBeUndefined();
});

it('should clean the string', () => {
  expect(clean(' \nimport item from "somewhere"; \n import item2 from "elsewhere"; \n ')).toEqual(
    `import item from "somewhere";

import item2 from "elsewhere";
`
  );

  expect(clean('import item from "somewhere";')).toEqual('import item from "somewhere";\n');
  expect(
    clean(`import Layout from "ui";
      export default Layout`)
  ).toEqual(`import Layout from "ui";

export default Layout
`);
});
