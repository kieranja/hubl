
import { renderString } from '../../src/index';
describe(`RSS Listing`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% rss_listing "rss_listing" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% rss_listing "my_rss_listing", rss_url="", publish_date_text="posted at", feed_source={rss_url="", is_external=False, content_group_id="24732847"}, click_through_text="Read more", show_date=True, include_featured_image=True, overrideable=False, publish_date_format="short", show_detail=True, show_author=True, number_of_items="5", is_external=False, title="", content_group_id="24732847", label="RSS Listing", limit_to_chars="200", attribution_text="by" %}`);
      
  });
});