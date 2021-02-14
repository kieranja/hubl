
import { renderString } from '../../src/index';
describe(`Subtracts a specified amount of time to a datetime object`, () => {
  it(`unnamed case 0`, () => {
    const html = renderString(`{% set date = "2018-07-14T14:31:30+0530"|strtotime("yyyy-MM-dd'T'HH:mm:ssZ") %}{{ date|minus_time(2, 'months') }}`);
    expect(html).toBe('Mon May 14 2018 10:01:30 GMT+0100 (British Summer Time)');
      
  });
});