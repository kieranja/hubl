
import { renderString } from '../../src/index';
describe(`Returns a list containing elements present in the first list but not the second list`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ [1, 2, 3]|difference([2, 3, 4]) }}`);
      
  });
});