
import { renderString } from '../../src/index';
describe(`Gallery`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% gallery "gallery" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% widget_block gallery "crm_slider", sizing="static", only_thumbnails=False, transition="slide", caption_position="below", with_thumbnail_nav=False, lightbox=False, auto_advance=True, overrideable=True, show_pagination=True, label="Gallery", loop_slides=True, num_seconds=5, version='1' %}
{% widget_attribute "slides" is_json=True %}[{"caption": "CRM Contacts App", "show_caption": true, "link_url": "http://www.hubspot.com/crm", "alt_text": "Screenshot of CRM Contacts", "img_src": "http://go.hubspot.com/hubfs/Contacts-View-1.png?t=1430860504240", "open_in_new_tab": true}, {"caption": "HubSpot CRM Contact Profile", "show_caption": true, "link_url": "http://www.hubspot.com/", "alt_text": "HubSpot CRM Contact Profile", "img_src": "http://cdn2.hubspot.net/hubfs/53/Contact-Profile.png?t=1430860504240", "open_in_new_tab": true}]{% end_widget_attribute %}
{% end_widget_block %}`);
      
  });
});