
import { renderString } from '../../src/index';
describe(`A global widget is one which can be shared across templates`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% global_widget "global_widget" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% global_widget "facebook_fan_box" overrideable=False, label='Facebook Fan Box' %}`);
      
  });
});