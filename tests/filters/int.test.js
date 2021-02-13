
import { renderString } from '../../src/index';
describe(`Convert the value into an integer.`, () => {
  it(`This example converts a text field string value to a integer`, () => {
      const html = renderString(`{{ "22" | int  + 20}}`);
      expect(html).toBe("42"); 
  });
});