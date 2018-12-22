const hasLayout = require('./has-defined-layout');

it('should handle no code', () => {
  expect(hasLayout()).toBe(false);
  expect(hasLayout({})).toBe(false);
  expect(hasLayout(1)).toBe(false);
  expect(hasLayout('')).toBe(false);
});

it('should not detect a layout', () => {
  expect(hasLayout('# A header')).toBe(false);
  expect(
    hasLayout(`# A header

## Sub-header`)
  ).toBe(false);
  expect(
    hasLayout(`import Spinner from "somewhere"

# Hello

<Spinner title="export default " />`)
  ).toBe(false);
  expect(
    hasLayout(`import Layout from "ui/Layout"

 export default Layout

# Hello`)
  ).toBe(false);
});

it('should detect a layout', () => {
  expect(
    hasLayout(`import Layout from "ui/Layout"

export default Layout

 # Hello`)
  ).toBe(true);
  expect(
    hasLayout(`import { Spinner } from "ui"

export default ({children}) => <div>{children}</div>

 # Hello

 <Spinner />`)
  ).toBe(true);
});
