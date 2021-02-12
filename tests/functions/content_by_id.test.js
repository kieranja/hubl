
import { renderString } from '../../src/index';
describe(`Returns a landing page, website page or blog post by id`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ content_by_id(123) }}`);
  });
});