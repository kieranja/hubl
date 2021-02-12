
import { renderString } from '../../src/index';
describe(`Rewrites the URL of an image in File Manager to a URL that will overlay a play button on request.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{  video_thumbnail({ url: "http://your.hubspot.site/hubfs/img.jpg", height: 720 }) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{  video_thumbnail({ url: "http://your.hubspot.site/hubfs/img.jpg", height: 720, color: "#FF0000" }) }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{  video_thumbnail({ url: "http://your.hubspot.site/hubfs/img.jpg", height: 720, color: "#FF0000", scale: 0.8 }) }}`);
      
  });
});