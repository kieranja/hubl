
import { renderString } from '../../src/index';
describe(`Renders an image tag`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% image "image" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% image "executive_image" label="Executive photo", alt="Photo of Brian Halligan", src="//cdn2.hubspot.net/hub/53/file-733888619-jpg/assets/hubspot.com/about/management/brian-home.jpg", width="300", loading="lazy" %}`);
      
  });
});