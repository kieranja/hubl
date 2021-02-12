
import { renderString } from '../../src/index';
describe(`A single line of text with no formatting that can be edited inline inside modules`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% inline_text "text" field="my_text_field" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% inline_text "simple_text_field" field="my_text_field" value="This is the default value for this text field" %}`);
      
  });
});