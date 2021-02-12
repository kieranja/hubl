
import { renderString } from '../../src/index';
describe(`Return the last item of a sequence`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set my_sequence = ['Item 1', 'Item 2', 'Item 3'] %}
{{ my_sequence|last }}`);
      
  });
});