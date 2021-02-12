
import { renderString } from '../../src/index';
describe(`Returns a sequence of blog author objects for the specified blog, sorted by slug ascending`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_authors() }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_authors('default') }}`);
      
  });
});