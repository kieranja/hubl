
import { renderString } from '../../src/index';
describe(`Allow visitors to share your page on social networks`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% social_sharing "social_sharing" use_page_url=True %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% widget_block social_sharing "my_social_sharing", label="Social Sharing", use_page_url=True, overrideable=True %}
{% widget_attribute "pinterest", is_json=True %}{"custom_link_format": "", "pinterest_media": "http://cdn2.hubspot.net/hub/158015/305390_10100548508246879_837195_59275782_6882128_n.jpg", "enabled": true, "network": "pinterest", "img_src": "https://static.hubspot.com/final/img/common/icons/social/pinterest-24x24.png"}{% end_widget_attribute %}
{% widget_attribute "twitter", is_json=True %}{"custom_link_format": "", "enabled": true, "network": "twitter", "img_src": "https://static.hubspot.com/final/img/common/icons/social/twitter-24x24.png"}{% end_widget_attribute %}
{% widget_attribute "linkedin", is_json=True %}{"custom_link_format": "", "enabled": true, "network": "linkedin", "img_src": "https://static.hubspot.com/final/img/common/icons/social/linkedin-24x24.png"}{% end_widget_attribute %}
{% widget_attribute "facebook," is_json=True %}{"custom_link_format": "", "enabled": true, "network": "facebook", "img_src": "https://static.hubspot.com/final/img/common/icons/social/facebook-24x24.png"}{% end_widget_attribute %}
{% widget_attribute "email", is_json=True %}{"custom_link_format": "", "enabled": true, "network": "email", "img_src": "https://static.hubspot.com/final/img/common/icons/social/email-24x24.png"}{% end_widget_attribute %}
{% end_widget_block %}`);
      
  });
});