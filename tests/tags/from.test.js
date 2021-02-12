
import { renderString } from '../../src/index';
describe(`Alternative to the import tag that lets you import and use specific macros from one template to another`, () => {
  it(`This example uses an html file containing two macros.`, () => {
      const html = renderString(`{% macro header(tag, title_text) %}
    <header> <{{ tag }}>{{ title_text }} </{{tag}}> </header>
{% endmacro %}
{% macro footer(tag, footer_text) %}
    <footer> <{{ tag }}>{{ footer_text }} </{{tag}}> </footer>
{% endmacro %}`);
      
  });
  it(`The macro html file is accessed from a different template, but only the footer macro is imported and executed`, () => {
      const html = renderString(`{% from 'custom/page/web_page_basic/my_macros.html' import footer %}
{{ footer('h2', 'My footer info') }}`);
      
  });
});