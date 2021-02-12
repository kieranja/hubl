
import { renderString } from '../../src/index';
describe(`Return a string which is the concatenation of the strings in the sequence.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ [1, 2, 3]|join('|') }}`);
      expect(html).toBe(`1|2|3`);
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ [1, 2, 3]|join }}`);
      expect(html).toBe(`123`);
  });

  // TODO: need to fix.
  it(`It is also possible to join certain attributes of an object`, () => {
      const html = renderString(`{% set users = [{"name": "kieran", "username": "bob"}] %} {{ users|join(', ', attribute='username') }}`);
     expect(html).toBe('bob'); 
  });
});