
import { renderString } from '../../src/index';
describe(`Email subscription preferences form`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% email_subscriptions "email_subscriptions"  %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% email_subscriptions "email_subscriptions", resubscribe_button_text="Yes, resubscribe me!", unsubscribe_single_text="Uncheck the types of emails you do not want to receive:", subheader_text="If this is not your email address, please ignore this page since the email associated with this page was most likely forwarded to you.", unsubscribe_all_unsubbed_text="You are presently unsubscribed from all of our emails. Would you like to receive our emails again?", button_text="Update email preferences", label="Subscription Preferences", header="Communication Preferences", unsubscribe_all_option="Unsubscribe me from all mailing lists.", unsubscribe_all_text="Or check here to never receive any emails:" %}`);
      
  });
});