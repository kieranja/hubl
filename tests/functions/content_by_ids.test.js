
import { renderString } from '../../src/index';
describe(`Given a list of content ids, returns a dict of landing page, website page or blog posts matching those ids`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ content_by_ids([1, 2, 3]) }}`);
      
  });
});