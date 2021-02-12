
import { renderString } from '../../src/index';
describe(`Gets a list of object from the HubSpot CRM by query or by list of ids. For security, only product objects can be retrieved on any public page. Supported object types are HubSpot built-in objects, portal specific objects, and integrator objects.For security, only portal specific objects and product can be retrieved on any public page. Any other built-in object types (except product) or integrator object types must be hosted on a page which is either password protected or requires a CMS Membership login. Objects are returned as a list of dict of properties and values.To page through results, use limit and offset parameters on the query like limit=10&offset=20`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ crm_objects("contact", "firstname=Bob") }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ crm_objects("CONTACT", [1, 2, 3]) }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{ crm_objects("house_listing", [1, 2, 3]) }}`);
      
  });
  it(`unnamed case 3`, () => {
      const html = renderString(`{{ crm_objects("contact", "firstname=Bob&hs_analytics_num_page_views__gte=10", "firstname,lastname", false) }}`);
      
  });
});