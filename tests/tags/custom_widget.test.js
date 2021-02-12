
import { renderString } from '../../src/index';
describe(`A custom module`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% custom_widget "custom_widget" widget_name="Custom Module Name" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% custom_widget "employee_quote" widget_name="Employee Quote", label="Employee image and quote section" %}`);
      
  });
});