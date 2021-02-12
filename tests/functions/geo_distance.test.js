
import { renderString } from '../../src/index';
describe(`Calculates the ellipsoidal 2D distance between two points on Earth`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ geo_distance(row.location, 37.3435, -122.0344, "mi") }}`);
      
  });
});