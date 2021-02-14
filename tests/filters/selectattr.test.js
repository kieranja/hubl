
import { renderString } from '../../src/index';
describe(`Filters a sequence of objects by applying a test to an attribute of an object and only selecting the ones with the test succeeding.`, () => {
  it(`This loop would select any post containing content.post_list_summary_featured_image`, () => {
      const html = renderString(`{% set contents = [{"post_list_summary_featured_image": "http://image.com", "title": "123"},{"post_list_summary_featured_image": false, "title": "123"}] %}{% for content in contents|selectattr('post_list_summary_featured_image') %}
    <div class="post-item">Post in listing markup</div>
{% endfor %}`);
      expect(html).toContain("Post in listing markup") 
  });
});