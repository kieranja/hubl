
import { renderString } from '../../src/index';
describe(`Return a titlecased version of the value. I.e. words will start with uppercase letters, all remaining characters are lowercase.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "My title should be titlecase"|title }} `);
      
  });
});