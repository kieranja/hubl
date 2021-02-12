
import { renderString } from '../../src/index';
describe(`Reverse the object or return an iterator the iterates over it the other way round.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] %}
{% for num in nums|reverse %}
    {{ num }}
{% endfor %}`);
      
  });
});