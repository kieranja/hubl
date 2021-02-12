
import { renderString } from '../../src/index';
describe(`A filter that groups up items within a sequence`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`
{%- set items=[1, 2, 3, 4, 5] -%}
<table>
{%- for row in items|batch(3, '&nbsp;') %}
  <tr>
  {%- for column in row %}
    <td>{{ column }}</td>
  {%- endfor %}
  </tr>
{%- endfor %}
</table>`);
      expect(html).toBe(`<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>5</td>
    <td>&nbsp;</td>
  </tr>
</table>`);
  });
});