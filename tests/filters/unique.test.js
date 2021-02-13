
import { renderString } from '../../src/index';
describe(`Extract a unique set from a sequence of objects`, () => {

  it(`Filter duplicated strings from a sequence of strings`, () => {
      const html = renderString(`{{ ['foo', 'bar', 'foo', 'other'] | unique | join(', ') }}`);
      expect(html).toBe(`foo, bar, other`);
  });

  it(`Filter duplicated strings from a objects`, () => {
    const html = renderString(`{{ [{hey:1}, {hey:1}] | unique('hey') | tojson }}`);
    expect(html).toBe(`{\"hey\":true}`);
});
});