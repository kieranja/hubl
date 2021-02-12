
import { renderString } from '../../src/index';
describe(`Gets a list of associated objects from the HubSpot CRM based on the given object id, association category, and association definition id.Supported object types that can be retrieved are HubSpot built-in objects, portal specific objects, and integrator objects. For security, only portal specific objects and product can be retrieved on any public page. Any other built-in object types (except product) or integrator object types must be hosted on a page which is either password protected or requires a CMS Membership login. Objects are returned as a dict of properties and values.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ crm_associations("123", "HUBSPOT_DEFINED", "4") }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ crm_associations("123", "HUBSPOT_DEFINED", "4", "amount__lt=100", "dealname,dealstage", false) }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{ crm_associations("123", "USER_DEFINED", "12", "amount__lt=100", "dealname,dealstage", false) }}`);
      
  });
});