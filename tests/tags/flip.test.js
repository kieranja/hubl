
import { renderString } from '../../src/index';
describe(`Outputs the first and second block in specified or reverse order depending on the evaluation of the condition`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% flip val_true %}
world
{% with %}
hello
{% endflip %}`);
      expect(html).toBe(`hello
world`);
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% flip val_false %}
world
{% with %}
hello
{% endflip %}`);
      expect(html).toBe(`world
hello`);
  });
});