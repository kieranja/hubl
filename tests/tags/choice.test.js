
import { renderString } from '../../src/index';
describe(`A list of options`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% choice "flip_layout", value="left", choices="left,right", export_to_template_context=True %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% choice "type_of_page", label='Choose the type of page', value='About', choices='About, Careers, Contact, Store' %}`);
      
  });
});