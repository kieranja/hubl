
import { renderString } from '../../src/index';
describe(`Echos the result of the expression`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set string_to_echo = "Print me" %}
{% print string_to_echo %}`);
      
  });
});