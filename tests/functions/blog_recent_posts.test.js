
import { renderString } from '../../src/index';
describe(`Returns a sequence of blog post objects for the specified blog, sorted by most recent first`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_recent_posts }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_recent_posts('default', 5) }}`);
      
  });
});