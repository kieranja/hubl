
import { renderString } from '../../src/index';
describe(`Returns a list containing elements present in only one list.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ [1, 2, 3]|symmetric_difference([2, 3, 4]) }}`);
      
  });
});