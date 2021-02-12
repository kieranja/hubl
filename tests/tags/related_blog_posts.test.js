
import { renderString } from '../../src/index';
describe(`Returns a list of related blog post objects for the specified blog, sorted by relevance for the given parameters`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% related_blog_posts %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% related_blog_posts blog_ids="1,2", limit=5, tags="Sales enablement, couches", end_date="2018-04-10", blog_authors="John Smith,Joe Smith,Frank Smith", path_prefixes="/path-prefix", post_formatter="test_macro" %}`);
      
  });
});