
import { renderString } from '../../src/index';
describe(`Render a password reset form.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% password_reset "my_password_reset" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% password_reset "my_password_reset" password_label="Password", password_confirm_label="Confirm Password", submit_button_text="Save password", show_password="Show password" %}`);
      
  });
});