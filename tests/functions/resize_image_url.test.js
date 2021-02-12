
import { renderString } from '../../src/index';
describe(`Rewrites the URL of an image in File Manager to a URL that will resize the image on request`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ resize_image_url("http://your.hubspot.site/hubfs/img.jpg", 200) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ resize_image_url("http://your.hubspot.site/hubfs/img.jpg", 0, 300) }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{ resize_image_url("http://your.hubspot.site/hubfs/img.jpg", 0, 0, 300) }}`);
      
  });
});