
import { renderString } from '../../src/index';
describe(`Returns the the nested link structure of an advanced menu.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set menu = menu(123) %}{{ menu.label }} {{ menu.url }} {{ menu.children }} {{ menu.activeNode }} {{ menu.activeBranch }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% set menu = menu(123, 'breadcrumb') %}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{% set menu = menu(123, 'page_name', 'Test Page') %}`);
      
  });
});