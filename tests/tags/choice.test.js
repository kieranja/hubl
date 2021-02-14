
import { renderString } from '../../src/index';
describe(`A list of options`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% choice "flip_layout", value="left", choices="left,right", export_to_template_context=True %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% choice "flip_layout", value="left", choices="[[\"\", \"\"], [\"option1\", \"Option 1\"], [\"option2\", \"Option 2\"], [\"option3\", \"Option 3\"]]", export_to_template_context=True %}`);
      
  });
});