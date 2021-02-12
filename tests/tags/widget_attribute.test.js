
import { renderString } from '../../src/index';
describe(`Defines a rich attribute for a widget. Only valid within a widget_block tag`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% widget_block rich_text "my_text_block" overrideable=True, label="Right Column" %}
   {% widget_attribute "html" %}
       <h2>Something Powerful</h2>
       <p>Some paragraph content...</p>
   {% end_widget_attribute %}
{% end_widget_block %}`);
      
  });
});