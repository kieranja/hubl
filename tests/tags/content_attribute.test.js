
import { renderString } from '../../src/index';
describe(`Sets default content in an attribute of the content object, such as content.email_body`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% content_attribute "email_body" %}
<p>Your email body default content</p>
{% end_content_attribute %}`);
      
  });
});