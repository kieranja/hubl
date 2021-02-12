
import { renderString } from '../../src/index';
describe(`Apply Python string formatting to an object.`, () => {
  it(`%s can be replaced with other variables or values`, () => {
      const html = renderString(`{{ "Hi %s %s"|format(contact.firstname, contact.lastname) }} `);
      
  });
});