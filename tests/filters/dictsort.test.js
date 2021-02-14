
import { renderString } from '../../src/index';
describe(`Sort a dict and yield (key, value) pairs.`, () => {
  it(`Sort the dict by value, case insensitive`, () => {
      const html = renderString(`{% set contact = {"why" : "1.please", "you": "3.sort", "json": "2.dont", "a": "4.json"} %}
{%- for key, val in contact|dictsort(false, 'value') -%}
    {{ val }}
{%- endfor -%}`);

    expect(html).toBe('1.please2.dont3.sort4.json');
      
  });
});