
import { renderString } from '../../src/index';
describe(`Evaluates to true if the value is divisible by the given number`, () => {
  it(`This example is an alternative to using the is divisibleby expression test`, () => {
      const html = renderString(`{% set num = 10 %}
{% if num|divisible(2) %}
    The number is divisble by 2
{% endif %}`);
      
  });
});