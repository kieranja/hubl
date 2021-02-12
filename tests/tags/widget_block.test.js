
import { renderString } from '../../src/index';
describe(`A widget block can be used to define widget attribute values with rich content, using widget_attribute tags`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% widget_block rich_text "my_text_block" overrideable=True, label="Right Column" %}
{% widget_attribute "html" %}
<h2>Something Powerful</h2>
<p>Some paragraph content...</p>
{% end_widget_attribute %}
{% end_widget_block %}`);
      
  });
});