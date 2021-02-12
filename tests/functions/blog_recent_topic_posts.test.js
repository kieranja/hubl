
import { renderString } from '../../src/index';
describe(`DEPRECATED -- see 'blog_recent_tag_posts'
Returns a sequence of blog post objects for the specified blog, for the specified topic, sorted by most recent first`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_recent_topic_posts('default', 'culture', 5) }}`);
      
  });
});