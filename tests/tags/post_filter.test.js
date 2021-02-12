
import { renderString } from '../../src/index';
describe(`Include a list of links to filter blog posts. Filter posts by tag, month, or author. 
This module can only be used in templates for: Blog Post`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% post_filter "my_post_filter" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% post_filter "my_post_filter", label="My Post Filter", expand_link_text="see all", filter_type="tag", list_title="Lists by Tag", max_links=5, order_by="post_count", select_blog="default" %}`);
      
  });
});