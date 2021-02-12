
import { renderString } from '../../src/index';
describe(`Assigns the value or result of a statement to a variable`, () => {
  it(`Set a variable in with a set statement and print the variable in a expression`, () => {
      const html = renderString(`{% set primaryColor = "#F7761F" %}
{{ primaryColor }}
`);
      
  });
  it(`You can combine multiple values or variables into a sequence variable`, () => {
      const html = renderString(`{% set var_one = "String 1" %}
{% set var_two = "String 2" %}
{% set sequence = [var_one,  var_two] %}`);
      
  });
});