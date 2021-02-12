
import { renderString } from '../../src/index';
describe(`Strip SGML/XML tags and replace adjacent whitespace by one space.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set some_html = "<div><strong>Some text</strong></div>" %}
{{ some_html|striptags }}`);
      
  });
});