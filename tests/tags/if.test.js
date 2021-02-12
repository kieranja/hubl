
import { renderString } from '../../src/index';
describe(`Outputs inner content if expression evaluates to true, otherwise evaluates any elif blocks, finally outputting content of any else block present`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% if condition %}
If the condition is true print this to template.
{% endif %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% if number <= 2 %}
Variable named number is less than or equal to 2.
{% elif number <= 4 %}
Variable named number is less than or equal to 4.
{% elif number <= 6 %}
Variable named number is less than or equal to 6.
{% else %}
Variable named number is greater than 6.
{% endif %}`);
      
  });
});