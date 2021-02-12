
import { renderString } from '../../src/index';
describe(`Generates stylesheet link tag for specified template path`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ include_css("custom/page/Designers_2015/designers-doc-2015.css") }}`);
      
  });
});