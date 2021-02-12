
import { renderString } from '../../src/index';
describe(`Allows you to access and use macros from a different template`, () => {
  it(`This example uses an html file containing two macros.`, () => {
      const html = renderString(`{% macro header(tag, title_text) %}
<header> <{{ tag }}>{{ title_text }} </{{tag}}> </header>
{% endmacro %}
{% macro footer(tag, footer_text) %}
<footer> <{{ tag }}>{{ footer_text }} </{{tag}}> </footer>
{% endmacro %}`);
      
  });
  it(`The macro html file is imported from a different template. Macros are then accessed from the name given to the import.`, () => {
      const html = renderString(`{% import 'custom/page/web_page_basic/my_macros.html' as header_footer %}
{{ header_footer.header('h1', 'My page title') }}
{{ header_footer.footer('h3', 'Company footer info') }}`);
      
  });
});