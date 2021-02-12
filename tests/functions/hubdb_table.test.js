
import { renderString } from '../../src/index';
describe(`Returns information about a table`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ hubdb_table(123) }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ hubdb_table("test_table") }}`);
      
  });
});