
import { renderString } from '../../src/index';
describe(`Evaluates to true if the value is a valid IPv6 address`, () => {
  it(`This example shows how to test if a string is a valid ipv6 address`, () => {
      const html = renderString(`{% set ip = '2000::' %}
{% if ip|ipv6 %}
    The string is a valid IPv6 address
{% endif %}`);
      
  });
  it(`This example shows how to filter list of ipv6 addresses`, () => {
      const html = renderString(`{{ ['192.108.0.1', null, True, 13, '2000::'] | ipv6 }}`);
      expect(html).toBe(`['2000::']`);
  });
});