
import { renderString } from '../../src/index';
describe(`Return a copy of the value with all occurrences of a substring replaced with a new one. The first argument is the substring that should be replaced, the second is the replacement string. If the optional third argument count is given, only the first count occurrences are replaced`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "Hello World"|replace("Hello", "Goodbye") }}`);
      expect(html).toBe(`Goodbye World`);
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ "aaaaargh"|replace("a", "d'oh, ", 2) }}`);
      expect(html).toBe(`d'oh, d'oh, aaargh`);
  });
});