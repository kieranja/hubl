
import { renderString } from '../../src/index';
describe(`Renders the blog comments embed tag`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% blog_comments "blog_comments" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% blog_comments "default_blog_comments" select_blog="359485112" %}`);
      
  });
});