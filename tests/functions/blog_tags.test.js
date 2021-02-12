
import { renderString } from '../../src/index';
describe(`Returns a sequence of the 250 most blogged-about tags (based on number of associated blog posts) for the specified blog, sorted by blog post count`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_tags() }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ blog_tags('default') }}`);
      
  });
  it(`Return the 50 most blogged-about tags for blogId`, () => {
      const html = renderString(`{{ blog_tags(blogId, 50) }}`);
      
  });
});