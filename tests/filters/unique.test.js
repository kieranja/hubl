
import { renderString } from '../../src/index';
describe(`Extract a unique set from a sequence of objects`, () => {
  it(`Filter duplicated strings from a sequence of strings`, () => {
      const html = renderString(`{{ ['foo', 'bar', 'foo', 'other'] | unique | join(', ') }}`);
      expect(html).toBe(`foo, bar, other`);
  });

  // TODO: fix attr
  it(`Filter out duplicate blog posts`, () => {
      const html = renderString(`{% for content in contents|unique(attr='slug') %}

{% endfor %}`);
      
  });
});