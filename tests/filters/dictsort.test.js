
import { renderString } from '../../src/index';
describe(`Sort a dict and yield (key, value) pairs.`, () => {
  it(`Sort the dict by value, case insensitive`, () => {
      const html = renderString(`{% for item in contact|dictsort(false, 'value') %}
    {{item}}
{% endfor %}`);
      
  });
});