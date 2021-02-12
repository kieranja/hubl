
import { renderString } from '../../src/index';
describe(`Pretty print a variable. Useful for debugging.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set this_var ="Variable that I want to debug" %}
{{ this_var|pprint }}`);
      
  });
});