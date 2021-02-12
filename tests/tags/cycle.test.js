
import { renderString } from '../../src/index';
describe(`The cycle tag can be used within a for loop to cycle through a series of string values and print them with each iteration`, () => {
  it(`In the example below, a class of "odd" and "even" and even are applied to posts in a listing`, () => {
      const html = renderString(`{% for content in contents %}
    <div class="post-item {% cycle 'odd','even' %}">Blog post content</div>
{% endfor %}`);
      
  });
});