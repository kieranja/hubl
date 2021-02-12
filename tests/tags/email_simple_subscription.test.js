
import { renderString } from '../../src/index';
describe(`Simple email unsubscribe form`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% email_simple_subscription "email_simple_subscription" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% email_simple_subscription "email_simple_subscription" header="Email Unsubscribe", input_help_text="Your email address:", input_placeholder="email@example.com", button_text="Unsubscribe", label="Backup Unsubscribe" %}`);
      
  });
});