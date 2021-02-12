
import { renderString } from '../../src/index';
describe(`Loads a css file to be output in the head`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ require_css('/test.css') }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ require_css('/test.css', { async: true }) }}`);
      
  });
});