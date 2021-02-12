
import { renderString } from '../../src/index';
describe(`Blog social sharing module`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% blog_social_sharing "blog_social_sharing" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% blog_social_sharing "my_blog_social_sharing", select_blog="359485112" %}`);
      
  });
});