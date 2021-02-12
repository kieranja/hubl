
import { renderString } from '../../src/index';
describe(`Format the value like a human-readable file size (i.e. 13 kB, 4.1 MB, 102 Bytes, etc).`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set bytes = 100000 %}
{{ bytes|filesizeformat }}`);
      
  });
});