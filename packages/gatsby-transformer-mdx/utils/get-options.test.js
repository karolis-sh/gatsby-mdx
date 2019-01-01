const getOptions = require('./get-options');

it('should prefill defaults', () => {
  expect(getOptions()).toEqual({
    pagesPath: expect.any(String),
    loaders: {
      js: expect.any(Function),
      mdx: expect.any(Function),
    },
  });
});

it('should allow {loaders}', () => {
  const js = jest.fn();
  const mdx = jest.fn();
  expect(
    getOptions({
      loaders: { js, mdx },
    })
  ).toEqual({
    pagesPath: expect.any(String),
    loaders: { js, mdx },
  });
});

it('should override {pagesPath}', () => {
  const pagesPath = '/User/qa/gatsby/src/content';
  expect(getOptions({ pagesPath })).toEqual({
    pagesPath,
    loaders: {
      js: expect.any(Function),
      mdx: expect.any(Function),
    },
  });
});

it('should allow {defaultLayout} ', () => {
  const defaultLayout = 'components/layout';
  expect(getOptions({ defaultLayout })).toEqual({
    pagesPath: expect.any(String),
    loaders: {
      js: expect.any(Function),
      mdx: expect.any(Function),
    },
    defaultLayout,
  });
});

it('should allow {defaultImports} as string', () => {
  const defaultImports = 'import {Item} from "src/components";';
  expect(getOptions({ defaultImports })).toEqual({
    pagesPath: expect.any(String),
    loaders: {
      js: expect.any(Function),
      mdx: expect.any(Function),
    },
    defaultImports,
  });
});

it('should allow {defaultImports} as list of strings', () => {
  const defaultImports = [
    'import {Item} from "src/components";',
    'import {Grid} from "src/components/layout";',
  ];
  expect(getOptions({ defaultImports })).toEqual({
    pagesPath: expect.any(String),
    loaders: {
      js: expect.any(Function),
      mdx: expect.any(Function),
    },
    defaultImports,
  });
});

it('should allow {defaultImports} as object', () => {
  const defaultImports = { value: '{Box}', path: 'src/components"' };
  expect(getOptions({ defaultImports })).toEqual({
    pagesPath: expect.any(String),
    loaders: {
      js: expect.any(Function),
      mdx: expect.any(Function),
    },
    defaultImports,
  });
});

it('should allow {defaultImports} as list of object', () => {
  const defaultImports = [
    { value: '{List}', path: 'src/components"' },
    { value: '{Badge}', path: 'src/ui"' },
  ];
  expect(getOptions({ defaultImports })).toEqual({
    pagesPath: expect.any(String),
    loaders: {
      js: expect.any(Function),
      mdx: expect.any(Function),
    },
    defaultImports,
  });
});

it('should allow {defaultImports} as list of objects and strings', () => {
  const defaultImports = [
    'import {Grid} from "src/components/layout";',
    { value: '{Badge}', path: 'src/ui"' },
  ];
  expect(getOptions({ defaultImports })).toEqual({
    pagesPath: expect.any(String),
    loaders: {
      js: expect.any(Function),
      mdx: expect.any(Function),
    },
    defaultImports,
  });
});
