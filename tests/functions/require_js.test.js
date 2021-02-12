
import { renderString } from '../../src/index';
describe(`Enqueues a js file to be output in the head or footer`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ require_js('/test.js') }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ require_js('/test.js', { position: 'footer', async: true, defer: true }) }}`);
      
  });
});