
import { renderString } from '../../src/index';
describe(`Set the respond code as the specified code. 404 is the only supported code for now.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ set_response_code(404) }}`);
      
  });
});