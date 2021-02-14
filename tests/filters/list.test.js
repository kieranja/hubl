
import { renderString } from '../../src/index';
describe(`Convert the value into a list. If it was a string the returned list will be a list of characters.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set one = 1 %}{% set two = 2 %}{% set three = 3 %}{% set list_num = one|list + two|list + three|list %}{{ list_num }}`);
     expect(html).toBe('123') 
  });
});