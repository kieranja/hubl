
import { renderString } from '../../src/index';
describe(`Returns column information for specific column in a table`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ hubdb_table_column(123, \"name\") }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ hubdb_table_column("test_table", \"name\") }}`);
      
  });
});