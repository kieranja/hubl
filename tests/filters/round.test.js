
import { renderString } from '../../src/index';
describe(`Round the number to a given precision.`, () => {
  it(`Basic case.`, () => {
      const html = renderString(`{{ 42.55|round }}`);
      expect(html).toBe(`43`);
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