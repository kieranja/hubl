
import { renderString } from '../../src/index';
describe(`Returns a full URL to the listing page for all blog posts for the specified blog`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_all_posts_url('default') }}`);
      
  });
});