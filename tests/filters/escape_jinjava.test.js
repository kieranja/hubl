
import { renderString } from '../../src/index';
describe(`Converts the characters { and } in string s to Jinjava-safe sequences. Use this filter if you need to display text that might contain such characters in Jinjava. Marks return value as markup string.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set escape_string = "{{This markup is printed as text}}" %}
{{ escape_string|escape_jinjava }}`);
      
  });
});