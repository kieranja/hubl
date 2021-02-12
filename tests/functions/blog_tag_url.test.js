
import { renderString } from '../../src/index';
describe(`Returns a full URL to the specified tag's listing page for the specified blog`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_tag_url('default', 'culture') }}`);
      
  });
});