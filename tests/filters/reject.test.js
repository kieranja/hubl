
import { renderString } from '../../src/index';
describe(`Filters a sequence of objects by applying a test to the object and rejecting the ones with the test succeeding.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set some_numbers = [10, 12, 13, 3, 5, 17, 22] %}
{% some_numbers|reject('even') %}`);
      
  });
});