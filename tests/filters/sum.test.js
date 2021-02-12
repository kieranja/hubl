
import { renderString } from '../../src/index';
describe(`Returns the sum of a sequence of numbers plus the value of parameter start (which defaults to 0). When the sequence is empty it returns start.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set sum_this = [1, 2, 3, 4, 5] %}
{{ sum_this|sum }}
`);
      
  });
  it(`Sum up only certain attributes`, () => {
      const html = renderString(`Total: {{ items|sum(attribute='price') }}`);
      
  });
});