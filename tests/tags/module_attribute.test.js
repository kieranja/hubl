
import { renderString } from '../../src/index';
describe(`Defines a rich attribute for a module. Only valid within a module_block tag`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`
   {% module_attribute "html" %}
       <h2>Something Powerful</h2>
       <p>Some paragraph content...</p>
   {% end_module_attribute %}
`);
      
  });
});