
import { renderString } from '../../src/index';
describe(`Filters a sequence of objects by applying a test to an attribute of an object or the attribute and rejecting the ones with the test succeeding.`, () => {
  it(`This loop would reject any post containing content.post_list_summary_featured_image`, () => {
      const html = renderString(`{% for content in contents|rejectattr('post_list_summary_featured_image') %}
    <div class="post-item">Post in listing markup</div>
{% endfor %}`);
      
  });
});