
import { renderString } from '../../src/index';
describe(`Renders a call to action embed tag`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ cta('ccd39b7c-ae18-4c4e-98ee-547069bfbc5b') }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ cta('ccd39b7c-ae18-4c4e-98ee-547069bfbc5b', 'justifycenter') }}`);
      
  });
});