
import { renderString } from '../../src/index';
describe(`Logo image`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% logo "logo" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% logo "my_logo" label="Logo", src="//cdn2.hubspot.net/hub/53/file-1237149549-png/assets/hubspot.com/V2-Global/hubspot-logo-dark.png", width=200 %}`);
      
  });
});