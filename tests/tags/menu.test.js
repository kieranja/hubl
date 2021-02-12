
import { renderString } from '../../src/index';
describe(`Advanced menu module`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% menu "menu", id="123" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% menu "my_menu", id="456", site_map_name="Default", overrideable=False, root_type="site_root", flyouts="true", max_levels="2", flow="horizontal", label="Advanced Menu" %}`);
      
  });
});