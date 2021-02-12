
import { renderString } from '../../src/index';
describe(`Enforce HTML escaping. This will probably double escape variables.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set escape_string = "<div>This markup is printed as text</div>" %}
{{ escape_string|forceescape }}
`);
      
  });
});