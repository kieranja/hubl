
import { renderString } from '../../src/index';
// TODO: shim the Date object to be more Java-esq
describe(`Adds a specified amount of time to a datetime object`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set date = "2018-07-14T14:31:30+0530"|strtotime("yyyy-MM-dd'T'HH:mm:ssZ") %}{{ date|plus_time(5, 'days') }}`);
      expect(html).toBe('Thu Jul 19 2018 10:01:30 GMT+0100 (British Summer Time)');
  });
});