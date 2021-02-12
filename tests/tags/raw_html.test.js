
import { renderString } from '../../src/index';
describe(`Insert custom HTML module`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% raw_html "raw_html" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% raw_html "my_raw_html" label="Enter HTML here", value="<div>My HTML Block</div>" %}`);
      
  });
});