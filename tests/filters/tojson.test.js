
import { renderString } from '../../src/index';
describe(`Writes object as a JSON string`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ [0,1,2]|tojson }}`);
      expect(html).toBe('[0,1,2]')
  });
});