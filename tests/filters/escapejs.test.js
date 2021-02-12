
import { renderString } from '../../src/index';
describe(`Escapes strings so that they can be safely inserted into a JavaScript variable declaration`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set escape_string = "This string can safely be inserted into JavaScript" %}
{{ escape_string|escapejs }}`);
      
  });
});