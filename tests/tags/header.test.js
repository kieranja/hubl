
import { renderString } from '../../src/index';
describe(`One line of text to be displayed in a large font size`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% header "header" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% header "my_header", header_tag="h1", overrideable=True, value="A clear and bold header", label="Header" %}`);
      
  });
});