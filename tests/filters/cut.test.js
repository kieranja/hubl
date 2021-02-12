
import { renderString } from '../../src/index';
describe(`Removes a string from the value from another string`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set my_string = "Hello world." %}{{ my_string|cut(' world') }}`);
     
 
    expect(html).toBe('Hello.');
  });
});