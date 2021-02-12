
import { renderString } from '../../src/index';
describe(`Mark the value as safe, which means that in an environment with automatic escaping enabled this variable will not be escaped.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ content.post_list_content|safe }}`);
      
  });
});