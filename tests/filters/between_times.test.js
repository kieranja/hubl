
import { renderString } from '../../src/index';
describe(`Calculates the time between two datetime objects`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set begin = "2018-07-14T14:31:30+0530"|strtotime("yyyy-MM-dd'T'HH:mm:ssZ") %}{% set end = "2018-07-20T14:31:30+0530"|strtotime("yyyy-MM-dd'T'HH:mm:ssZ") %}{{ begin|between_times(end, 'days') }}`);
      expect(html).toBe('6')  
  });
});