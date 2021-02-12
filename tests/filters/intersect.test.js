
import { renderString } from '../../src/index';
describe(`Returns a list containing elements present in both lists`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ [1, 2, 3]|intersect([2, 3, 4]) }}`);
      
  });
});