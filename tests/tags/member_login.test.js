
import { renderString } from '../../src/index';
describe(`Render a login form.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% member_login "my_login" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% member_login "my_login", email_label="Email", password_label="Password", remember_me_label="Remember Me", submit_button_text="Login", reset_password_text="Forgot your password?", show_password="Show password" %}`);
      
  });
});