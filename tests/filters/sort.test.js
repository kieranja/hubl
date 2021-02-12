
import { renderString } from '../../src/index';
describe(`Sort an iterable.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% for item in iterable|sort %}
    ...
{% endfor %}`);
      
  });
  it(`This filter requires all parameters to sort by an attribute in HubSpot. Below is a set of posts that are retrieved and alphabetized by 'name'.`, () => {
      const html = renderString(`{% set my_posts = blog_recent_posts('default', limit=5) %}
{% for item in my_posts|sort(False, False,'name') %}
    {{ item.name }}<br>
{% endfor %}`);
      
  });
});