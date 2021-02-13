
import { configure, renderString } from '../../src/index';
import HubDbManager from '../../src/lib/hubdb_manager';
import json from '../fixture/hubdb.json';

describe(`Returns a list of HubDB rows based on the query`, () => {

  beforeEach(() => {
    const hubdbManager = new HubDbManager(json)
    configure(null, hubdbManager);
  })

  it(`unnamed case 0`, () => {
      const html = renderString(`{{ hubdb_table_rows(1, "foo=bar&orderBy=foo") }}`);
      
  });

  // todo: implement
  it(`unnamed case 1`, () => {
      // const html = renderString(`{{ hubdb_table_rows("test_table", "foo=bar&orderBy=foo") }}`);
      
  });
});