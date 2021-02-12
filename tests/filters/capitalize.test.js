
import { renderString } from '../../src/index';
describe(`Capitalize a value. The first character will be uppercase, all others lowercase.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set sentence = "the first letter of a sentence should always be capitalized." %}{{ sentence|capitalize }}`);
     
    expect(html).toBe("The first letter of a sentence should always be capitalized.")
  });
});