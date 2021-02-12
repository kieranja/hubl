
import { renderString } from '../../src/index';
describe(`includes multiple files in one template or stylesheet`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% include "custom/page/web_page_basic/my_footer.html" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% include "generated_global_groups/2781996615.html" %}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{% include "hubspot/styles/patches/recommended.css" %}`);
      
  });
});