
import { renderString } from '../../src/index';
describe(`Allow visitors to search your site on Google`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% google_search "google_search" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% google_search "my_search_bar" label="Google Search", prefill_input_with_pathname=True, search_field_label="Search this site on Google", search_button_text="Search Google" %}`);
      
  });
});