import resolve from './resolve-scope-info';

it('should handle default imports', () => {
  expect(
    resolve(
      `
      import Demo from '../ui/Demo';
      import UI from 'design-ui'
      `
    )
  ).toEqual({
    '../ui/Demo': { ImportDefault: 'Demo' },
    'design-ui': { ImportDefault: 'UI' },
  });
});

it('should handle namespace imports', () => {
  expect(resolve("import * as UI from 'design-ui'")).toEqual({
    'design-ui': { ImportNamespace: 'UI' },
  });
});

it('should handle imports', () => {
  expect(resolve("import { Divider, Button as Toggle } from 'design-ui';")).toEqual({
    'design-ui': {
      Import: {
        Divider: 'Divider',
        Button: 'Toggle',
      },
    },
  });
});

it('should handle multiple imports', () => {
  expect(
    resolve(
      `
      import Demo from '../ui/Demo'
      import UI, { Divider, Button as Toggle } from 'design-ui'
      import * as Components from '@stuff/whenever'
      `
    )
  ).toEqual({
    '../ui/Demo': {
      ImportDefault: 'Demo',
    },
    'design-ui': {
      ImportDefault: 'UI',
      Import: {
        Divider: 'Divider',
        Button: 'Toggle',
      },
    },
    '@stuff/whenever': {
      ImportNamespace: 'Components',
    },
  });
});

it('should resolve variable shadowing to {ImportDefault}', () => {
  expect(
    resolve(
      `
      import * as UI from 'design-ui';
      import UI, { UI } from 'design-ui';
      import UI from '../../components';
      `
    )
  ).toEqual({
    '../../components': { ImportDefault: 'UI' },
  });
});

it('should resolve variable shadowing to {ImportNamespace}', () => {
  expect(
    resolve(
      `
      import * as UI from 'design-ui';
      import UI, { UI } from 'design-ui';
      import * as UI from '../../components';
      `
    )
  ).toEqual({
    '../../components': { ImportNamespace: 'UI' },
  });
});

it('should resolve variable shadowing to {Import}', () => {
  expect(
    resolve(
      `
      import * as UI from 'design-ui';
      import UI, { UI } from 'design-ui';
      import { UI } from '../../components';
      `
    )
  ).toEqual({
    '../../components': { Import: { UI: 'UI' } },
  });
});

it('should resolve variable shadowing to complex {Import}', () => {
  expect(
    resolve(
      `
      import { UI } from 'design-ui-2';
      import { whatever as UI, UI as itsOK } from 'design-ui';
      import { stuff as UI, UI } from '../../components';
      `
    )
  ).toEqual({
    'design-ui': { Import: { UI: 'itsOK' } },
    '../../components': { Import: { UI: 'UI' } },
  });
});
