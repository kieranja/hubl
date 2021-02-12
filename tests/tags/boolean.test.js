
import { renderString } from '../../src/index';
describe(`A boolean option`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% boolean "boolean" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% boolean "nav_toggle" label="Hide navigation", value=False, no_wrapper=True %}`);
      
  });
});