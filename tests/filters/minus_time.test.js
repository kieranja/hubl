
import { renderString } from '../../src/index';
describe(`Subtracts a specified amount of time to a datetime object`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% mydatetime|minus_time(3, 'days') %}`);
      
  });
});