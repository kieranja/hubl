
import { renderString } from '../../src/index';
describe(`Convert a value to uppercase`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "text to make uppercase"|upper }}`);
      expect(html).toBe("TEXT TO MAKE UPPERCASE")
  });
});