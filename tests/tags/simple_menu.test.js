
import { renderString } from '../../src/index';
describe(`Simple menu, uses static link structure`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% simple_menu "simple_menu" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% simple_menu "my_simple_menu" orientation="horizontal", label="Simple Menu" %}`);
      
  });
});