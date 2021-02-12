
import { renderString } from '../../src/index';
describe(`Truncates a given string, respecting html markup (i.e. will properly close all nested tags)`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "<p>I want to truncate this text without breaking my HTML<p>"|truncatehtml(28, '..', false) }}`);
      expect(html).toBe(`<p>I want to truncate this text without breaking my HTML</p>`);
  });
});