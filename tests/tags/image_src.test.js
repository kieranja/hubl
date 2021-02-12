
import { renderString } from '../../src/index';
describe(`Prints the src attribute value of an image`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% image_src "image_src" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% image_src "executve_image_src" src="//cdn2.hubspot.net/hub/53/file-733888614-jpg/assets/hubspot.com/about/management/dharmesh-home.jpg", no_wrapper=True %}`);
      
  });
});