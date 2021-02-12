
import { renderString } from '../../src/index';
describe(`Returns the total number of published posts in the specified blog`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_total_post_count }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_total_post_count(359485112) }}`);
      
  });
});