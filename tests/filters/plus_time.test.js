
import { renderString } from '../../src/index';
describe(`Adds a specified amount of time to a datetime object`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% mydatetime|plus_time(3, 'days') %}`);
      
  });
});