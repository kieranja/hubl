
import { renderString } from '../../src/index';
describe(`Creates a wrapped module inside a drag-and-drop area.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% dnd_module
  path="@hubspot/rich_text",
  offset=0,
  width=8,
%}
  {% module_attribute "html" %}
    <h1>Hello, world!</h1>
  {% end_module_attribute %}
{% end_dnd_module %}`);
      
  });
});