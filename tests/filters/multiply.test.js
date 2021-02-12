
import { renderString } from '../../src/index';
describe(`Multiplies the current object with the given multiplier`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set n = 20 %}
{{ n|multiply(3) }}`);
      
  });
});