
import { renderString } from '../../src/index';
describe(`Render an icon from the HubSpot icon library`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% icon name="address-card" icon_set="fontawesome-5" style="solid" format="svg" width="64" height="64", purpose="semantic", title="address-card icon" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% icon name="address-card" %}`);
      
  });
});