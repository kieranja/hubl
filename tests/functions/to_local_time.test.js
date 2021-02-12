
import { renderString } from '../../src/index';
describe(`Converts a UNIX timestamp to a date in the portal's timezone`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ to_local_time(eastern_dt) }}`);
      
  });
});