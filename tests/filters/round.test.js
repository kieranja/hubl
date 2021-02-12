
import { renderString } from '../../src/index';
describe(`Round the number to a given precision.`, () => {
  it(`Note that even if rounded to 0 precision, a float is returned.`, () => {
      const html = renderString(`{{ 42.55|round }}`);
      expect(html).toBe(`43.0`);
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ 42.55|round(1, 'floor') }}`);
      expect(html).toBe(`42.5`);
  });
  it(`If you need a real integer, pipe it through int`, () => {
      const html = renderString(`{{ 42.55|round|int }}`);
      expect(html).toBe(`43`);
  });
});