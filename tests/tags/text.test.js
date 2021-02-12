
import { renderString } from '../../src/index';
describe(`A single line of text with no formatting`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% text "text" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% text "simple_text_field" label="Enter text here", value="This is the default value for this text field" %}`);
      
  });
});