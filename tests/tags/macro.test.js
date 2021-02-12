
import { renderString } from '../../src/index';
describe(`Macros allow you to print multiple statements with a dynamic value or values`, () => {
  it(`Basic macro syntax`, () => {
      const html = renderString(`{% macro name_of_macro(argument_name, argument_name2) %}
    {{ argument_name }}
    {{ argument_name2 }}
{% endmacro %}
{{ name_of_macro("value to pass to argument 1", "value to pass to argument 2") }}`);
      
  });
  it(`Example of a macro used to print CSS3 properties with the various vendor prefixes`, () => {
      const html = renderString(`{% macro trans(value) %}
   -webkit-transition: {{value}};
   -moz-transition: {{value}};
   -o-transition: {{value}};
   -ms-transition: {{value}};
   transition: {{value}};
{% endmacro %}`);
      
  });
  it(`The macro can then be called like a function. The macro is printed for anchor tags in CSS.`, () => {
      const html = renderString(`a { {{ trans("all .2s ease-in-out") }} }`);
      
  });
});