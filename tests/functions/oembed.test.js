
import { renderString } from '../../src/index';
describe(`Returns OEmbed data dictionary for given request. Only works in emails.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ oembed({ url: "https://www.videoprovider.com/linktovideo"}) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ oembed({ url: "https://www.videoprovider.com/linktovideo", maxWidth: 400}) }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{ oembed({ url: "https://www.videoprovider.com/linktovideo", maxHeight: 200}) }}`);
      
  });
});