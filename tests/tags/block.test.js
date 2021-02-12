
import { renderString } from '../../src/index';
describe(`Blocks are regions in a template which can be overridden by child templates`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% extends "custom/page/web_page_basic/my_template.html" %}
{% block my_sidebar %}
   <!--Content that will render within a block of the same name in the parent template-->
{% endblock %}`);
      
  });
});