
import { renderString } from '../../src/index';
describe(`Renders a CTA module`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% cta "cta" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% cta "my_cta", label="Select a CTA", guid="ccd39b7c-ae18-4c4e-98ee-547069bfbc5b", image_src="https://no-cache.hubspot.com/cta/default/53/c7335b66-a0d4-4d19-82eb-75e1626d02d0.png" %}`);
      
  });
});