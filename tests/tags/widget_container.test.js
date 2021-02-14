
import { renderString } from '../../src/index';
describe(`Flexible column`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% widget_container "widget_container" %}
{% end_widget_container %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% widget_container "my_flexible_column" %}
   
{% end_widget_container %}`);
      
  });
});