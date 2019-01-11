import resolve from './resolve-scope';

const DATA = {
  'a-ui': {
    ImportDefault: jest.fn(),
    Import: {
      Mat1: jest.fn(),
      Mat2: jest.fn(),
      Mat3: jest.fn(),
    },
  },
  'b-ui': {
    ImportDefault: jest.fn(),
  },
  '../components': {
    Import: {
      Comp1: jest.fn(),
      Comp2: jest.fn(),
      Comp3: jest.fn(),
    },
  },
};

it('should resolve and empty scope', () => {
  expect(resolve({}, {})).toEqual({});
  expect(resolve({ 'a-ui': DATA['a-ui'] }, {})).toEqual({});
});

it('should resolve {ImportDefault}', () => {
  expect(
    resolve(
      {
        'a-ui': DATA['a-ui'],
      },
      {
        'a-ui': {
          ImportDefault: 'DesignUI',
          Import: {
            _Mat1: 'Mat1',
          },
        },
        '../components': {
          Import: {
            Comp1: 'Comp1',
            Comp2: 'Comp2',
          },
        },
      }
    )
  ).toEqual({
    DesignUI: DATA['a-ui'].ImportDefault,
  });
});

it('should resolve {ImportNamespace} via provided {Imports}', () => {
  expect(
    resolve(
      {
        'a-ui': DATA['a-ui'],
        '../components': DATA['../components'],
      },
      {
        'a-ui': {
          ImportNamespace: 'MAT',
        },
        '../components': {
          ImportDefault: 'Components',
        },
      }
    )
  ).toEqual({
    MAT: DATA['a-ui'].Import,
  });
});

it('should resolve {Import} via provided {Imports}', () => {
  expect(
    resolve(
      {
        'a-ui': DATA['a-ui'],
        '../components': DATA['../components'],
      },
      {
        'a-ui': {
          Import: {
            Mat1: 'Mat1',
            Mat2: 'RenamedComponent',
          },
        },
        '../components': {
          Import: {
            Comp2: 'Comp2',
            Comp0: 'Comp1',
          },
        },
      }
    )
  ).toEqual({
    Mat1: DATA['a-ui'].Import.Mat1,
    RenamedComponent: DATA['a-ui'].Import.Mat2,
    Comp2: DATA['../components'].Import.Comp2,
  });
});
