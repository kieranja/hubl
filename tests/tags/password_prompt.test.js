
import { renderString } from '../../src/index';
describe(`Requests a password to access a landing page.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% password_prompt "my_password_prompt" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% password_prompt "my_password_prompt", label="My Password Prompt", bad_password_message="<p>Sorry, please try again.</p>", submit_button_text="Submit", password_placeholder="Password" %}`);
      
  });
});