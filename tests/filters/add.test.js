
import { renderString } from '../../src/index';
describe(`adds a number to the existing value`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set my_num = 40 %}{{ my_num|add(13) }}`);
      expect(html).toBe("53")
  });
});