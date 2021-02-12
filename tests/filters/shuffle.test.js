
import { renderString } from '../../src/index';
describe(`Randomly shuffle a given list, returning a new list with all of the items of the original list in a random order`, () => {
  it(`The example below is a standard blog loop that's order is randomized on page load`, () => {
      const html = renderString(`{% for content in contents|shuffle %}
    <div class="post-item">Markup of each post</div>
{% endfor %}`);
      
  });
});