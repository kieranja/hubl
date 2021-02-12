
import { renderString } from '../../src/index';
describe(`Convert value into a boolean.`, () => {
  it(`This example converts a text string value to a boolean`, () => {
      const html = renderString(`{% if "true"|bool == true %}hello world{% endif %}`);
      
      expect(html).toBe("hello world");
  });
});