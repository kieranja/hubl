
import { renderString } from '../../src/index';
describe(`Strip leading and trailing whitespace.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ " remove whitespace "|trim }}`);
      expect(html).toBe('remove whitespace');
  });
});