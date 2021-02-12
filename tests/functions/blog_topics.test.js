
import { renderString } from '../../src/index';
describe(`DEPRECATED -- see 'blog_tags'
Returns a sequence of the 250 most blogged-about topics (based on number of associated blog posts) for the specified blog, sorted by blog post count`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_topics() }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_topics('default') }}`);
      
  });
  it(`Return the 50 most blogged-about topics for blogId`, () => {
      const html = renderString(`{{ blog_topics(blogId, 50) }}`);
      
  });
});