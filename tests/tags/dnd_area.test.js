
import { renderString } from '../../src/index';
describe(`Creates container that supports drag-and-drop in content editors.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% dnd_area "unique_name", class="main" %}
{% end_dnd_area %}`);
      
  });
});