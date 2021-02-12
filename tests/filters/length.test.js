
import { renderString } from '../../src/index';
describe(`Return the number of items of a sequence or mapping`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set services = ['Web design', 'SEO', 'Inbound Marketing', 'PPC'] %}
{{ services|length }}`);
      
  });
});