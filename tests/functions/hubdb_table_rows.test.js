
import { renderString } from '../../src/index';
describe(`Returns a list of HubDB rows based on the query`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ hubdb_table_rows(123, "foo=bar&orderBy=foo") }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ hubdb_table_rows("test_table", "foo=bar&orderBy=foo") }}`);
      
  });
});