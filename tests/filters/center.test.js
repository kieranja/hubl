
import { renderString } from '../../src/index';
describe(`Uses whitespace to center the value in a field of a given width.`, () => {
  it(`Since HubSpot's compiler automatically strips whitespace, this filter will only work in tags where whitespace is retained, such as a <pre>`, () => {
      const html = renderString(`<pre>
    {% set var = "string to center" %}
    {{ var|center(80) }}
</pre>`);

  });
});