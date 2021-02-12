
import { renderString } from '../../src/index';
describe(`Used to add an empty module for spacing to the left or right of another module in a row`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% space "space" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% space "my_spacer" label="Horizontal Spacer" %}`);
      
  });
});