
import { renderString } from '../../src/index';
describe(`Email unsubscribe form`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% email_subscriptions_confirmation "email_subscriptions_confirmation" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% email_subscriptions_confirmation "email_subscriptions_confirmation", header="Communication Preferences", label="Subscriptions Update Confirmation", unsubscribe_all_success="You have successfully unsubscribed from all email communications.", subscription_update_success="You have successfully updated your email preferences.", subheader_text="If this is not your email address, please ignore this page since the email associated with this page was most likely forwarded to you." %}`);
      
  });
});