
import { renderString } from '../../src/index';
describe(`Returns URL to specified asset by given path`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ get_asset_url("/custom/page/Designers_2019/designer-doc-2105.js") }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ get_asset_url("../assets/banner.jpeg") }}`);
      
  });
});