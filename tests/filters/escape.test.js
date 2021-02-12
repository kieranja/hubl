
import { renderString } from '../../src/index';
describe(`Converts the characters &, <, >, , and  in string s to HTML-safe sequences. Use this filter if you need to display text that might contain such characters in HTML. Marks return value as markup string.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set escape_string = "<div>This markup is printed as text</div>" %}
{{ escape_string|escape }}`);
      
  });
});