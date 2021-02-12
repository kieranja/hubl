
import { renderString } from '../../src/index';
describe(`Gets a single object from the HubSpot CRM by query or by instance id.Supported object types are HubSpot built-in objects, portal specific objects, and integrator objects.For security, only portal specific objects and product can be retrieved on any public page. Any other built-in object types (except product) or integrator object types must be hosted on a page which is either password protected or requires a CMS Membership login. Objects are returned as a dict of properties and values.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ crm_object("contact", "email=contact@company.com") }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ crm_object("house_listing", "price__lte=300000&price__gt=400000") }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{ crm_object("contact", "12345") }}`);
      
  });
  it(`unnamed case 3`, () => {
      const html = renderString(`{{ crm_object("contact", "firstname=Bob&hs_analytics_num_page_views__gte=10", "firstname,lastname", false) }}`);
      
  });
});