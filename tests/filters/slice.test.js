
import { renderString } from '../../src/index';
describe(`Slice an iterator and return a list of lists containing those items.`, () => {
  it(`create a div containing three ul tags that represent columns`, () => {
      const html = renderString(`{% set items = ['laptops', 'tablets', 'smartphones', 'smart watches', 'TVs'] %}
<div class="columwrapper">
  {% for column in items|slice(3) %}
    <ul class="column-{{ loop.index }}">
    {% for item in column %}
      <li>{{ item }}</li>
    {% endfor %}
    </ul>
  {% endfor %}
</div>
`);
      
  });
});