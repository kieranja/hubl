
import { renderString } from '../../src/index';
describe(`Converts a datetime string and datetime format to a datetime object`, () => {
  it(`unnamed case 0`, () => {
    const html = renderString(`{{ "2018-07-14T14:31:30+0530"|strtotime("yyyy-MM-dd'T'HH:mm:ssZ")}}`);
    expect(html).toBe('2018-07-14T10:01:30GMT+1')
  });
});