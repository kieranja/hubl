
import { renderString } from '../../src/index';
describe(`Convert the value into a floating point number.`, () => {
  it(`This example converts a text field string value to a float`, () => {
      const html = renderString(`{% text "my_text" value='25', export_to_template_context=True %}
{% widget_data.my_text.value|float + 28 %}`);
      
  });
});