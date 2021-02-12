
import { renderString } from '../../src/index';
describe(`Returns a sequence of blog post objects for the specified blog, for the specified tag, sorted by most recent first`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_recent_tag_posts('default', 'culture', 5) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_recent_tag_posts('default', ['culture', 'featured-post'], 5) }}`);
      
  });
});