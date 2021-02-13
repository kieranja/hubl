
import { renderString } from '../../src/index';
describe(`Converts JSON string to Object`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set obj = '{"hey": "1"}' %}{{ obj | fromjson | tojson }}`);
      expect(html).toBe('{"hey":"1"}');
  });
});