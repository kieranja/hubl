
import { renderString } from '../../src/index';
describe(`Process all inner expressions as plain text`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% raw %}
    The personalization token for a contact's first name is {{ contact.firstname }}
{% endraw %}`);
      
  });
});