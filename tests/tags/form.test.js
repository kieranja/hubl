
import { renderString } from '../../src/index';
describe(`Insert one of the forms created in the Form Manager`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% form "my_form" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% form "my_form" label="My Form", custom_form_html=None, no_title=False, title="" %}`);
      
  });
});