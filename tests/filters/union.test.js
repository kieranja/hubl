
import { renderString } from '../../src/index';
describe(`Returns a list containing elements present in either list`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ [1, 2, 3]|union([2, 3, 4]) }}`);
      
  });
});