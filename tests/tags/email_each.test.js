
import { renderString } from '../../src/index';
describe(`Allows looping over a list value in an email where a for loop would not work. Use "item." to access the current element of the list.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% email_each list="custom.cart_items" %}
<td>{{item.name}}</td><td>{{item.price}}
{% endemail_each %}`);
      expect(html).toBe(`<td>Pizza</td><td>$10</td>
<td>Soft drink</td><td>$10</td>`);
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% email_each list="custom.cart_items" item="line_item" %}
<td>{{line_item.name}}</td><td>{{line_item.price}}
{% endemail_each %}`);
      expect(html).toBe(`<td>Pizza</td><td>$10</td>
<td>Soft drink</td><td>$10</td>`);
  });
});