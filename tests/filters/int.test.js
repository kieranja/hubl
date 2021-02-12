
import { renderString } from '../../src/index';
describe(`Convert the value into an integer.`, () => {
  it(`This example converts a text field string value to a integer`, () => {
      const html = renderString(`{% text "my_text" value='25', export_to_template_context=True %}
{% widget_data.my_text.value|int + 28 %}`);
      
  });
});