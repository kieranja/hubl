
import { renderString } from '../../src/index';
describe(`Converts URLs in plain text into clickable links.`, () => {
  it(`links are shortened to 40 chars and defined with rel="nofollow"`, () => {
      const html = renderString(`{{ "http://www.hubspot.com"|urlize(40) }}`);
      
  });
  it(`If target is specified, the target attribute will be added to the <a> tag`, () => {
      const html = renderString(`{{ "http://www.hubspot.com"|urlize(10, true, target='_blank') }}`);
      
  });
});