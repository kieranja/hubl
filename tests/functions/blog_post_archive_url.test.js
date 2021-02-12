
import { renderString } from '../../src/index';
describe(`Returns a full URL to the archive listing page for the given date values on the specified blog`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_post_archive_url('default', 2017) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_post_archive_url('default', 2017, 7) }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{ blog_post_archive_url('default', 2017, 7, 5) }}`);
      
  });
});