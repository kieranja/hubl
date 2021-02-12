
import { renderString } from '../../src/index';
describe(`Splits the input string into a list on the given separator`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set string_to_split = "Stephen; David; Cait; Nancy; Mike; Joe; Niall; Tim; Amanda" %}
{% set names = string_to_split|split(';', 4) %}
<ul>
   {% for name in names %}
       <li>{{ name }}</li>
   {% endfor %}
</ul>`);
      
  });
});