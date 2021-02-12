
import { renderString } from '../../src/index';
describe(`Returns string value of object`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set number_to_string = 45 %}
{{ number_to_string|string }}`);
      
  });
});