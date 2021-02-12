
import { renderString } from '../../src/index';
describe(`Calculates a new hex color value based on a given input string var and multiplier`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ color_variant("#3A539B", 80) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ color_variant("#3A539B", -80) }}`);
      expect(html).toEqual("#00034b")
      
  });
});