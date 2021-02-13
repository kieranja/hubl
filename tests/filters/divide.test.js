
import { renderString } from '../../src/index';
describe(`Divides the current value by a divisor`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set numerator = 106 %}
{{ numerator|divide(2) }}`);
      
  });
});