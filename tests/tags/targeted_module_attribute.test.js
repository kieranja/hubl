
import { renderString } from '../../src/index';
describe(`Defines a smart object parameter for a module. Only valid within a module_block tag definition.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% module_block raw_html "module_block raw_html" definition_id=2801831944, overrideable=False, smart_type="GEO_IP", label="Custom HTML" %}
{% module_attribute "value" %}
Default smart content value
{% end_module_attribute %}
{% targeted_module_attribute "value" label="Custom HTML", criterion_id=2801831949, order=0, target_type="CUSTOM_HTML_WIDGET"  %}
Smart content rule 1
{% end_targeted_module_attribute %}
{% end_module_block %}`);
      
  });
});