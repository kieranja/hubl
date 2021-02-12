
import { renderString } from '../../src/index';
describe(`Create an HTML/XML attribute string based on the items in a dict.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set html_attributes = {'class': 'bold', 'id': 'sidebar'} %}
<div {{ html_attributes|xmlattr }}></div>`);
      
  });
});