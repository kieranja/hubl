
import { renderString } from '../../src/index';
describe(`Blog subscription module`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% blog_subscribe "blog_subscribe" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% blog_subscribe "subscribe_designers_blog", select_blog="default", title="Subscribe to the Designers Blog", response_message="Thanks for Subscribing!", label="Blog Email Subscription", overrideable=False %}`);
      
  });
});