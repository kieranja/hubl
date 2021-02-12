
import { renderString } from '../../src/index';
describe(`Evaluates to true if the value is a valid IPv4 address`, () => {
  it(`This example shows how to test if a string is a valid ipv4 address`, () => {
      const html = renderString(`{% set ip = '192.108.0.' %}
{% if ip|ipv4 %}
    The string is a valid IPv4 address
{% endif %}`);
      
  });
  it(`This example shows how to filter list of ipv4 addresses`, () => {
      const html = renderString(`{{ ['192.108.0.1', null, True, 13, '2000::'] | ipv4 }}`);
      expect(html).toBe(`['192.108.0.']`);
  });
});