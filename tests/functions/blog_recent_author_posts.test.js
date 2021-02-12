
import { renderString } from '../../src/index';
describe(`Returns a sequence of blog post objects for the specified blog, by the specified author, sorted by most recent first`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ blog_recent_author_posts('default', 'jared-stehler', 5) }}`);
      
  });
});