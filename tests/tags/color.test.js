
import { renderString } from '../../src/index';
describe(`A color picker module`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% color "color" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% color "my_color_picker", label="Choose a color", color="#000000", no_wrapper=True %}`);
      
  });
});