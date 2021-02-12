
import { renderString } from '../../src/index';
describe(`Returns the lat/lon location of a postal code`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ postal_location("02139", "us") }}`);
      
  });
});