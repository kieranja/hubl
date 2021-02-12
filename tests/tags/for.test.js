
import { renderString } from '../../src/index';
describe(`Outputs the inner content for each item in the given iterable`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% for item in items %}
    {{ item }}
{% endfor %}`);
      
  });
  it(`Iterating over dictionary values`, () => {
      const html = renderString(`{% for value in dictionary %}
    {{ value }}
{% endfor %}`);
      
  });
  it(`Iterating over dictionary entries`, () => {
      const html = renderString(`{% for key, value in dictionary.items() %}
    {{ key }}: {{ value }}
{% endfor %}`);
      
  });
  it(`Standard blog listing loop`, () => {
      const html = renderString(`{% for content in contents %}
    Post content variables
{% endfor %}`);
      
  });
});