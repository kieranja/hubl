
import { renderString } from '../../src/index';
describe(`Renders a template string early to be used by other filters and functions`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "{% if my_val %} Hello {% else %} world {% endif %}"|render }}`);
      
  });
});