
import { renderString } from '../../src/index';
describe(`Unless is a conditional just like 'if' but works on the inverse logic.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% unless x < 0 %} x is greater than zero {% endunless %}`);
      
  });
});