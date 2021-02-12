
import { renderString } from '../../src/index';
describe(`Gets the property definitions for a given object type and set of property names. Supported object types are HubSpot built-in objects, portal specific objects, and integrator objects.For security, only portal specific objects and product can be retrieved on any public page. Any other built-in object types (except product) or integrator object types must be hosted on a page which is either password protected or requires a CMS Membership login. `, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ crm_property_definitions("house_listing", "agent_name,address") }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ crm_property_definitions("house_listing") }}`);
      
  });
});