
import { renderString } from '../../src/index';
describe(`Returns a sequence of blog post objects for the specified blog, sorted by most popular first`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_popular_posts }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_popular_posts('default', 5, 'gadgets', 'popular_past_year') }}`);
      
  });
});