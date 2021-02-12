
import { renderString } from '../../src/index';
describe(`An extra large, centered, header to denote an entire section`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% section_header "section_header" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% section_header "my_section_header" header="A clear and bold header", subheader="A more subdued subheader", label="Sidebar Header" %}`);
      
  });
});