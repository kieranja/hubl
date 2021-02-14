
import { renderString } from '../../src/index';
// TODO: fix to be more aligned with HS
describe(`Converts a datetime string and datetime format to a datetime object`, () => {
  it(`unnamed case 0`, () => {
    const html = renderString(`{{ "2018-07-14T14:31:30+0530"|strtotime("yyyy-MM-dd'T'HH:mm:ssZ")}}`);
    expect(html).toBe('Sat Jul 14 2018 10:01:30 GMT+0100 (British Summer Time)')
  });
});