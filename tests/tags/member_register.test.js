
import { renderString } from '../../src/index';
describe(`Render a registration form.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% member_register "my_register" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% member_register "my_register" email_label="Email", password_label="Password", password_confirm_label="Confirm Password", submit_button_text="Save password", show_password="Show password" %}`);
      
  });
});