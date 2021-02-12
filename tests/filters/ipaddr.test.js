
import { renderString } from '../../src/index';
describe(`Evaluates to true if the value is a valid IPv4 or IPv6 address`, () => {
  it(`This example shows how to test if a string is a valid ip address`, () => {
      const html = renderString(`{% set ip = '1.0.0.1' %}
{% if ip|ipaddr %}
    The string is a valid IP address
{% endif %}`);
     
    expect(html).toContain('The string is a valid IP address');
  });
});