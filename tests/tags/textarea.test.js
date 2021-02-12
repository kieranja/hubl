
import { renderString } from '../../src/index';
describe(`Creates an editable plaintext text area`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% textarea "textarea" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% textarea "my_textarea", label="Enter plain text block", value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a urna quis lacus vehicula rutrum.", no_wrapper=True %}`);
      
  });
});