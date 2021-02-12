
import { renderString } from '../../src/index';
describe(`Return a copy of the value with all occurrences of a matched regular expression (Java RE2 syntax) replaced with a new one. The first argument is the regular expression to be matched, the second is the replacement string`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "It costs $300"|regex_replace("[^a-zA-Z]", "") }}`);
      expect(html).toBe(`Itcosts`);
  });
});