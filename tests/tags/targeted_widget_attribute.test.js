
import { renderString } from '../../src/index';
describe(`Defines a smart object parameter for a widget. Only valid within a widget_block tag definition.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% widget_block raw_html "widget_block raw_html" definition_id=2801831944, overrideable=False, smart_type="GEO_IP", label="Custom HTML" %}
{% widget_attribute "value" %}
Default smart content value
{% end_widget_attribute %}
{% targeted_widget_attribute "value" label="Custom HTML", criterion_id=2801831949, order=0, target_type="CUSTOM_HTML_WIDGET"  %}
Smart content rule 1
{% end_targeted_widget_attribute %}
{% end_widget_block %}`);
      
  });
});