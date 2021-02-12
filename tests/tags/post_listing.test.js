
import { renderString } from '../../src/index';
describe(`Include a listing of links to blog posts. Order posts by date or popularity.
This module can only be used in templates for: Blog Post`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% post_listing "my_post_listing" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% post_listing "my_post_listing", label="My Post Listing", list_title="Recent Posts", listing_type="recent", max_links=5, select_blog="default" %}`);
      
  });
});