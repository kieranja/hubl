
import { renderString } from '../../src/index';
describe(`Convert the value into a floating point number.`, () => {
  it(`This example converts a text field string value to a float`, () => {
      const html = renderString(`{{ "5" | float | add(0.5) | float }}`);
      expect(html).toBe('5.5');
  });
});