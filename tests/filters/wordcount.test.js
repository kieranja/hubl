
import { renderString } from '../../src/index';
describe(`Counts the words in the given string`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{%  set count_words = "Count the number of words in this variable" %}
{{ count_words|wordcount }}`);
      
  });
});