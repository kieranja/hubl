
import { renderString } from '../../src/index';
describe(`Uses whitespace to indent a string.`, () => {
  it(`Since HubSpot's compiler automatically strips whitespace, this filter will only work in tags where whitespace is retained, such as a <pre>`, () => {
      const html = renderString(`<pre>
    {% set var = "string to indent" %}
    {{ var|indent(2, true) }}
</pre>`);
      
  });
});