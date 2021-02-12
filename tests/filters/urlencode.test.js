
import { renderString } from '../../src/index';
describe(`Escape strings for use in URLs (uses UTF-8 encoding). It accepts both dictionaries and regular strings as well as pairwise iterables.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "Escape & URL encode this string"|urlencode }}`);
      
  });
});