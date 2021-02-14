
import { renderString } from '../../src/index';
describe(`Return a random item from the sequence.`, () => {
  it(`The example below is a standard blog loop that returns a single random post.`, () => {
      const html = renderString(`{% set contents = ['cats'] %} {% for content in contents|random %}
    <div class="post-item">Post item markup</div>{% endfor %}`);
      
    expect(html).toContain('Post item');
  });
});