
import { renderString } from '../../src/index';
describe(`Returns the absolute url of the specified paginated listing page for the current blog`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_page_link(current_page_num) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_page_link(next_page_num) }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{ blog_page_link(7) }}`);
      
  });
});