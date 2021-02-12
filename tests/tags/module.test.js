
import { renderString } from '../../src/index';
describe(`A module`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% module "module" module_id=123 %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% module "module" path="/absolute/path/to/Module" %}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{% module "module" path="relative/path/to/Module" %}`);
      
  });
  it(`unnamed case 3`, () => {
      const html = renderString(`{% module "module" path="@hubspot/rich_text" %}`);
      
  });
  it(`unnamed case 4`, () => {
      const html = renderString(`{% module "employee_quote" module_id=456, label="Employee image and quote section" %}`);
      
  });
});