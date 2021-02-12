
import { renderString } from '../../src/index';
describe(`Used to compile an inline widget_wrapper from code`, () => {
  it(`compiled to a template and stored in the environment, example would wrap the compiled widget in a <div>`, () => {
      const html = renderString(`{% widget_wrapper 'unique_key' %}
    <div>
        {{ html }}
    </div>
{% end_widget_wrapper %}

{% some_widget 'other_unique_key' widget_wrapper={type='inline', value='unique_key'} %}`);
      
  });
});