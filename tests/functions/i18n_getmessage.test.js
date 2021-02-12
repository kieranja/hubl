
import { renderString } from '../../src/index';
describe(`Gets the translated message for the language of the rendered page. Currently works only within modules.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ i18n_getmessage("error_message", "val1", "val2") }}`);
      
  });
});