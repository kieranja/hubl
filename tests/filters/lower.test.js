
import { renderString } from '../../src/index';
describe(`Convert a value to lowercase`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "Text to MAKE Lowercase"|lower }}`);
      expect(html).toBe("text to make lowercase");
  });
});