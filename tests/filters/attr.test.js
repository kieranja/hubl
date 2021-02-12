
import { renderString } from '../../src/index';
describe(`Renders the attribute of a dictionary`, () => {
  it(`The filter example below is equivalent to rendering a variable that exists within a dictionary, such as content.absolute_url.`, () => {
      const html = renderString(`{{ content|attr('absolute_url') }}`, {content: {'absolute_url': 'https://google.com'}});
     
      expect(html).toBe('https://google.com')
  });
});