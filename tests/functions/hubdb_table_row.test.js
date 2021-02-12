
import { renderString } from '../../src/index';
describe(`Returns a row from a table by id`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ hubdb_table_row(123, 456) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ hubdb_table_row("test_table", 456) }}`);
      
  });
});