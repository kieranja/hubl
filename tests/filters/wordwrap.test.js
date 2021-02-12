
import { renderString } from '../../src/index';
describe(`Return a copy of the string passed to the filter wrapped after 79 characters.`, () => {
  it(`Since HubSpot's compiler automatically strips whitespace, this filter will only work in tags where whitespace is retained, such as a <pre>`, () => {
      const html = renderString(`<pre>
    {{ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"|wordwrap(10) }}
</pre>`);
      
  });
});