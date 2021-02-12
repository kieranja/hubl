
import { renderString } from '../../src/index';
describe(`Returns a human-readable string representation of a language code (optionally translated to a target language)`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ locale_name('es', 'en') }}`);
      expect(html).toBe(`Spanish`);
  });
});