
import { renderString } from '../../src/index';
describe(`includes multiple files in one template or stylesheet`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% include "tests/fixture/include.html" %}`);
      expect(html).toContain('this is a test included file');
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% include "tests/fixture/include.html" %}`);
      expect(html).toContain('this is a test included file'); 
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{% include "tests/fixture/include.html" %}`);
      expect(html).toContain('this is a test included file'); 
  });
});