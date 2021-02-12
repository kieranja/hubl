
import { renderString } from '../../src/index';
describe(`Render a password reset request form.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% password_reset_request "my_password_reset_request" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% password_reset_request "my_password_reset_request" email_label="Email", submit_button_text="Send reset email"%}`);
      
  });
});